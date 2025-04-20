import { OremonData } from "../../types/oremonData";

const venusaur: OremonData = {
    id: "oremon:venusaur",
    name: "oremon.venusaur.name",
    description: "oremon.ivysaur.description",
    types: ["grass", "poison"],
    baseStats: {
        hp: 80,
        atk: 82,
        def: 83,
        atk_spe: 100,
        def_spe: 100,
        spd: 80
    },
    abilities: ["overgrow"],
    moves: ["tackle", "growl", "leech_seed", "vine_whip", "razor_leaf", "solar_beam"],
    textures: {
        default: "textures/entity/venusaur.png",
        shiny: "textures/entity/venusaur_shiny.png"
    },
    model: {
        default: "models/entity/venusaur.geo.json"
    }
};

export default venusaur;