import { OremonData } from "../../types/oremonData";

const ivysaur: OremonData = {
    id: "oremon:ivysaur",
    name: "oremon.ivysaur.name",
    description: "oremon.ivysaur.description",
    types: ["grass", "poison"],
    baseStats: {
        hp: 60,
        atk: 62,
        def: 63,
        atk_spe: 80,
        def_spe: 80,
        spd: 60
    },
    abilities: ["overgrow"],
    moves: ["tackle", "growl", "leech_seed", "vine_whip", "razor_leaf"],
    evolution: {
        level: 32,
        into: "oremon:venusaur"
    },
    textures: {
        default: "textures/entity/ivysaur.png",
        shiny: "textures/entity/ivysaur_shiny.png"
    },
    model: {
        default: "models/entity/ivysaur.geo.json"
    }
};

export default ivysaur;