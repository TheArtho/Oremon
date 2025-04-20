import {OremonData} from "../../types/oremonData";

const bulbasaur: OremonData = {
    id: "oremon:bulbasaur",
    name: "oremon.bulbasaur.name",
    description: "oremon.bulbasaur.description",
    types: ["grass", "poison"],
    baseStats: {
        hp: 45,
        atk: 49,
        def: 49,
        atk_spe: 65,
        def_spe: 65,
        spd: 45
    },
    abilities: ["overgrow"],
    moves: ["tackle", "growl", "leech_seed", "vine_whip"],
    evolution: {
        level: 16,
        into: "oremon:ivysaur"
    },
    textures: {
        default: "textures/entity/bulbasaur.png",
        shiny: "textures/entity/bulbasaur_shiny.png"
    },
    model: {
        default: "models/entity/bulbasaur.geo.json"
    }
};

export default bulbasaur;