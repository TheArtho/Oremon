const fs = require("fs-extra");
const path = require("path");
const Database = require("better-sqlite3");

const db = new Database(path.join(__dirname, "../db/veekun-pokedex.sqlite"));
const outputDir = path.join(__dirname, "../src/data/oremon");

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Mapping helpers
function createIdMap(table, key = "id", value = "identifier") {
    return Object.fromEntries(
        db.prepare(`SELECT ${key}, ${value} FROM ${table}`).all().map(row => [row[key], row[value]])
    );
}

const eggGroupsMap = createIdMap("egg_groups");
const typesMap = createIdMap("types");
const growthRateMap = createIdMap("growth_rates");
const shapesMap = Object.fromEntries(
    db.prepare("SELECT pokemon_shape_id, name FROM pokemon_shape_prose WHERE local_language_id = 9").all()
        .map(row => [row.pokemon_shape_id, row.name])
);

// Get all base evolutions
const evolutionsRaw = db.prepare(`
  SELECT *
  FROM pokemon_evolution
  LEFT JOIN pokemon_species ON pokemon_evolution.evolved_species_id = pokemon_species.id
`).all();

// Map for dex id → identifier (ex: 1 → "bulbasaur")
const speciesIdToSlug = Object.fromEntries(
    db.prepare("SELECT id, identifier FROM pokemon_species").all()
        .map(row => [row.id, row.identifier.toLowerCase()])
);

// Grouping evolution by source species
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
            gender: toNum(evo.gender_id) === 1
                ? "female"
                : toNum(evo.gender_id) === 2
                    ? "male"
                    : undefined,
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

function toNum(value) {
    return value != null && value !== "" ? Number(value) : undefined;
}

function toBool(value) {
    return value === "1" || value === 1;
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

// Reading all Pokémon
const stmt = db.prepare("SELECT * FROM pokemon_views");
const pokemons = stmt.all();

for (const row of pokemons) {
    const id = row.identifier.toLowerCase();

    const oremon = {
        id: `oremon:${id}`,
        name: `oremon.${id}.name`,
        description: `oremon.${id}.description`,
        types: [typesMap[row.type1], typesMap[row.type2]].filter(Boolean),
        baseStats: {
            hp: row.bhp,
            atk: row.batk,
            def: row.bdef,
            atk_spe: row.bspa,
            def_spe: row.bspd,
            spd: row.bspe
        },
        evYield: {
            hp: row.ehp,
            atk: row.eatk,
            def: row.edef,
            atk_spe: row.espa,
            def_spe: row.espd,
            spd: row.espe
        },
        abilities: {
            0: row.ability1_name || undefined,
            1: row.ability2_name || undefined,
            H: row.ability3_name || undefined
        },
        genderRate: row.gender_rate ?? undefined,
        catchRate: row.capture_rate ?? undefined,
        eggGroups: [eggGroupsMap[row.egg_group1], eggGroupsMap[row.egg_group2]].filter(Boolean),
        hatchCounter: row.hatch_counter ?? undefined,
        height: row.height / 10,
        weight: row.weight / 10,
        baseExperience: row.base_experience ?? undefined,
        growthRateId: growthRateMap[row.growth_rate_id],
        generationId: row.generation_id ?? undefined,
        isBaby: (row.is_baby ?? undefined) === 1,
        hasGenderDifferences: (row.has_gender_differences ?? undefined) === 1,
        formSwitchable: (row.forms_switchable ?? undefined) === 1,
        shape: shapesMap[row.shape_id]?.toLowerCase() || undefined,
        color: row.color ?? undefined,
        evolutions: evolutionMap[row.id] || []
    };

    const outPath = path.join(outputDir, `${id}.ts`);
    const fileContent = `import { OremonData } from "../../types/OremonData";

const ${id.replaceAll('-', '_')}: OremonData = ${JSON.stringify(oremon, null, 2)};

export default ${id.replaceAll('-', '_')};`;

    fs.writeFileSync(outPath, fileContent, "utf8");
    console.log(`Generated ${id}.ts`);
}

console.log("\x1b[32mAll OremonData files generated!\x1b[0m");
