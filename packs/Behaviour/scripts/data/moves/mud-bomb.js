const mud_bomb = {
    id: "mud-bomb",
    name: "oremon.mud-bomb.name",
    description: "oremon.mud-bomb.description",
    category: "special",
    accuracy: 85,
    power: 65,
    pp: 10,
    priority: 0,
    flags: {
        snatch: true,
        charge: true,
        pulseBased: true
    },
    target: "selected_pokemon",
    type: "ground",
    effectId: "none",
    effectChance: 30
};
export default mud_bomb;
