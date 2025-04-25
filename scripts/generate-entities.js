const fs = require("fs-extra");
const path = require("path");
const Database = require("better-sqlite3");

const db = new Database(path.join(__dirname, "../db/veekun-pokedex.sqlite"));
const MODEL_BASE_PATH = path.join(__dirname, "../../cobblemon-assets/blockbench/pokemon");
const SUBSTITUTE_PATH = path.join(MODEL_BASE_PATH, "special/substitute");

const SERVER_OUT = path.join(__dirname, "../out/behavior/entities/");
const CLIENT_OUT = path.join(__dirname, "../out/resource_pack/entity/");
const MODEL_OUT = path.join(__dirname, "../out/resource_pack/models/entity/");
const TEXTURE_OUT = path.join(__dirname, "../out/resource_pack/textures/entity/");
const ANIMATION_OUT = path.join(__dirname, "../out/resource_pack/animations/");

const GENERATIONS = ["gen1", "gen2", "gen3", "gen4", "gen5", "gen6", "gen7"];

function toNum(v) {
    return v != null && v !== "" ? Number(v) : undefined;
}
function toBool(v) {
    return v === 1 || v === "1";
}
function mapEvolutionMethod(id) {
    switch (id) {
        case 1: return "level-up";
        case 2: return "trade";
        case 3: return "use-item";
        case 4: return "shed";
        default: return "other";
    }
}

const typesMap = Object.fromEntries(
    db.prepare("SELECT id, identifier FROM types").all().map(row => [row.id, row.identifier])
);
const speciesIdToSlug = Object.fromEntries(
    db.prepare("SELECT id, identifier FROM pokemon_species").all().map(row => [row.id, row.identifier.toLowerCase()])
);
const evolutionsRaw = db.prepare(`
    SELECT * FROM pokemon_evolution
                      LEFT JOIN pokemon_species ON pokemon_evolution.evolved_species_id = pokemon_species.id
`).all();

const evolutionMap = {};
for (const evo of evolutionsRaw) {
    const fromId = evo.evolves_from_species_id;
    if (!evolutionMap[fromId]) evolutionMap[fromId] = [];
    evolutionMap[fromId].push({
        into: `oremon:${evo.identifier.toLowerCase()}`,
        method: mapEvolutionMethod(evo.evolution_trigger_id),
        conditions: {
            minLevel: toNum(evo.minimum_level),
            item: evo.trigger_item_id ? `item:${evo.trigger_item_id}` : undefined,
            heldItem: evo.held_item_id ? `item:${evo.held_item_id}` : undefined,
            gender: toNum(evo.gender_id) === 1 ? "female" : toNum(evo.gender_id) === 2 ? "male" : undefined,
            timeOfDay: evo.time_of_day || undefined,
            knownMove: evo.known_move_id ? `move:${evo.known_move_id}` : undefined,
            knownType: typesMap[toNum(evo.known_move_type_id)] || undefined,
            minHappiness: toNum(evo.minimum_happiness),
            minBeauty: toNum(evo.minimum_beauty),
            minAffection: toNum(evo.minimum_affection),
            physicalStat: toNum(evo.relative_physical_stats),
            partySpecies: speciesIdToSlug[evo.party_species_id] ? `oremon:${speciesIdToSlug[evo.party_species_id]}` : undefined,
            partyType: typesMap[toNum(evo.party_type_id)] || undefined,
            tradeWith: speciesIdToSlug[evo.trade_species_id] ? `oremon:${speciesIdToSlug[evo.trade_species_id]}` : undefined,
            needsOverworldRain: toBool(evo.needs_overworld_rain),
            turnUpsideDown: toBool(evo.turn_upside_down)
        }
    });
}

function copyAsset(source, target) {
    if (fs.existsSync(source)) {
        fs.copySync(source, target);
    }
}

function findModelAndTextures(id) {
    for (const gen of GENERATIONS) {
        const folder = path.join(MODEL_BASE_PATH, gen);
        if (!fs.existsSync(folder)) continue;

        const dirs = fs.readdirSync(folder, { withFileTypes: true });
        for (const dirent of dirs) {
            const name = dirent.name.replace(/^\d+_/, "").toLowerCase();
            if (name === id && dirent.isDirectory()) {
                const subdir = path.join(folder, dirent.name);
                const files = fs.readdirSync(subdir);

                const geo = files.find(f => f.endsWith(".geo.json"));
                const texture = files.find(f => f.endsWith(".png") && !f.includes("shiny"));
                const shiny = files.find(f => f.includes("shiny.png"));
                const animation = files.find(f => f.endsWith(".animation.json"));

                if (geo && texture && shiny) {
                    // Output directories
                    const modelOut = path.join(MODEL_OUT, id);
                    const texOut = path.join(TEXTURE_OUT, id);
                    const animOut = path.join(ANIMATION_OUT, id);
                    fs.ensureDirSync(modelOut);
                    fs.ensureDirSync(texOut);
                    fs.ensureDirSync(animOut);

                    // Copy assets
                    copyAsset(path.join(subdir, geo), path.join(modelOut, geo));
                    copyAsset(path.join(subdir, texture), path.join(texOut, texture));
                    copyAsset(path.join(subdir, shiny), path.join(texOut, shiny));
                    if (animation) {
                        copyAsset(path.join(subdir, animation), path.join(animOut, animation));
                    }

                    return {
                        geometry: `geometry.${geo.replace(".geo.json", "")}`,
                        geometry_female: `geometry.${geo.replace(".geo.json", "")}`,
                        texture: `textures/entity/${id}/${texture.replace(".png", "")}`,
                        shiny: `textures/entity/${id}/${shiny.replace(".png", "")}`,
                        hasCustomModel: true
                    };
                }
            }
        }
    }

    // Substitute fallback
    fs.ensureDirSync(path.join(MODEL_OUT, "substitute"));
    fs.ensureDirSync(path.join(TEXTURE_OUT, "substitute"));
    copyAsset(path.join(SUBSTITUTE_PATH, "substitute.geo.json"), path.join(MODEL_OUT, "substitute", "substitute.geo.json"));
    copyAsset(path.join(SUBSTITUTE_PATH, "substitute.png"), path.join(TEXTURE_OUT, "substitute", "substitute.png"));
    copyAsset(path.join(SUBSTITUTE_PATH, "substitute_shiny.png"), path.join(TEXTURE_OUT, "substitute", "substitute_shiny.png"));

    return {
        geometry: "geometry.substitute",
        geometry_female: "geometry.substitute",
        texture: "textures/entity/substitute/substitute",
        shiny: "textures/entity/substitute/substitute_shiny",
        hasCustomModel: false
    };
}

const pokemons = db.prepare("SELECT * FROM pokemon_views").all();

for (const row of pokemons) {
    const id = row.identifier.toLowerCase();
    const identifier = `oremon:${id}`;
    const evolutions = evolutionMap[row.id] || [];
    const { geometry, geometry_female, texture, shiny } = findModelAndTextures(id);

    const serverEntity = {
        format_version: "1.21.70",
        "minecraft:entity": {
            description: {
                identifier,
                is_spawnable: true,
                is_summonable: true,
                properties: {
                    "oremon:shiny": { type: "bool", default: false, client_sync: true },
                    "oremon:gender": {
                        type: "enum",
                        values: ["male", "female", "genderless"],
                        default: "male",
                        client_sync: true
                    },
                    "oremon:battling": { type: "bool", default: false, client_sync: true }
                }
            },
            component_groups: {
                "size:very_small": { "minecraft:scale": { value: 0.6 } },
                "size:small": { "minecraft:scale": { value: 0.8 } },
                "size:medium": { "minecraft:scale": { value: 1 } },
                "size:big": { "minecraft:scale": { value: 1.2 } },
                "size:gigantic": { "minecraft:scale": { value: 1.4 } },
                "despawn": { "minecraft:instant_despawn": {} },
                "shiny": { "minecraft:skin_id": { value: 1 } },
                "follow": {
                    "minecraft:behavior.follow_owner": {
                        priority: 4,
                        speed_multiplier: 1.2,
                        start_distance: 4,
                        stop_distance: 3,
                        can_teleport: true
                    }
                },
                "battle": { "minecraft:movement": { value: 0 } },
                "overworld": { "minecraft:movement": { value: 0.5 } },
                "tamed": {
                    "minecraft:is_tamed": {},
                    "minecraft:persistent": {}
                },
                "sit": { "minecraft:sittable": {} },
                "tick_world": { "minecraft:tick_world": { never_despawn: true, radius: 6 } },
                ...Object.fromEntries(evolutions.map(evo => [
                    `evolve_to:${evo.into.split(":")[1]}`,
                    {
                        "minecraft:transformation": {
                            into: `${evo.into}<oremon:evolution>`,
                            keep_owner: true
                        }
                    }
                ]))
            },
            components: {
                "minecraft:interact": {},
                "minecraft:tameable": {},
                "minecraft:type_family": { family: ["oremon"] },
                "minecraft:skin_id": { value: 0 },
                "minecraft:nameable": { always_show: false, allow_name_tag_renaming: false },
                "minecraft:collision_box": { width: 0.9, height: 1.2 },
                "minecraft:health": { value: 100, max: 100 },
                "minecraft:attack": { damage: 10 },
                "minecraft:movement": { value: 0.5 },
                "minecraft:jump.static": {},
                "minecraft:can_climb": {},
                "minecraft:navigation.generic": {},
                "minecraft:movement.generic": {},
                "minecraft:behavior.random_stroll": { priority: 8, speed_multiplier: 1 },
                "minecraft:behavior.look_at_player": {
                    priority: 0,
                    probability: 1,
                    angle_of_view_horizontal: 45,
                    angle_of_view_vertical: 45
                },
                "minecraft:behavior.float": { priority: 0 },
                "minecraft:breathable": {
                    total_supply: 15,
                    suffocate_time: 0,
                    breathes_water: false,
                    breathes_air: true
                },
                "minecraft:pushable": {
                    is_pushable: true,
                    is_pushable_by_piston: false
                },
                "minecraft:physics": { has_gravity: true }
            },
            events: {
                "setsize:very_small": {
                    add: {
                        component_groups: [
                            "size:very_small"
                        ]
                    }
                },
                "setsize:small": {
                    add: {
                        component_groups: [
                            "size:small"
                        ]
                    }
                },
                "setsize:medium": {
                    add: {
                        component_groups: [
                            "size:medium"
                        ]
                    }
                },
                "setsize:big": {
                    add: {
                        component_groups: [
                            "size:big"
                        ]
                    }
                },
                "setsize:gigantic": {
                    add: {
                        component_groups: [
                            "size:gigantic"
                        ]
                    }
                },
                "oremon:despawn": { add: { component_groups: ["despawn"] } },
                "oremon:make_shiny": {
                    add: { component_groups: ["shiny"] },
                    set_property: { "oremon:shiny": true }
                },
                "oremon:make_male": { set_property: { "oremon:gender": "male" } },
                "oremon:make_female": { set_property: { "oremon:gender": "female" } },
                "oremon:make_genderless": { set_property: { "oremon:gender": "genderless" } },
                "oremon:sit": { add: { component_groups: ["sit"] } },
                "oremon:capture": {
                    add: { component_groups: ["tamed", "tick_world", "follow"] }
                },
                "oremon:evolution": {
                    add: { component_groups: ["tamed", "tick_world"] }
                },
                "oremon:battle": {
                    remove: { component_groups: ["follow", "overworld"] },
                    add: { component_groups: ["battle"] },
                    set_property: { "oremon:battling": true }
                },
                "oremon:overworld": {
                    add: { component_groups: ["follow", "overworld"] },
                    remove: { component_groups: ["battle"] },
                    set_property: { "oremon:battling": false }
                },
                ...Object.fromEntries(evolutions.map(evo => [
                    `oremon:evolve_${evo.into.split(":")[1]}`,
                    { add: { component_groups: [`evolve_to:${evo.into.split(":")[1]}`] } }
                ]))
            }
        }
    };

    const clientEntity = {
        format_version: "1.10.0",
        "minecraft:client_entity": {
            description: {
                identifier,
                materials: { default: "entity_alphatest" },
                textures: {
                    default: texture,
                    default_female: texture,
                    shiny: shiny,
                    shiny_female: shiny
                },
                geometry: {
                    default: geometry,
                    default_female: geometry_female
                },
                animations: {
                    look_at: "animation.head_look",
                    look_at_controller: "controller.animation.oremon.lookat",
                    walk_controller: "controller.animation.oremon.walk",
                    idle: `animation.${id}.ground_idle`,
                    walk: `animation.${id}.ground_walk`
                },
                scripts: { animate: ["walk_controller"] },
                spawn_egg: { overlay_color: "#669853", base_color: "#60a89c" },
                render_controllers: ["controller.render.oremon"]
            }
        }
    };

    fs.outputJsonSync(path.join(SERVER_OUT, `${id}.se.json`), serverEntity, { spaces: 2 });
    fs.outputJsonSync(path.join(CLIENT_OUT, `${id}.ce.json`), clientEntity, { spaces: 2 });
    console.log(`✅ ${id}: entity + model + texture + animations`);
}

console.log("\x1b[32m✅ All entities generated with assets copied.\x1b[0m");
