const parting_shot = {
    id: "parting-shot",
    name: "oremon.parting-shot.name",
    description: "oremon.parting-shot.description",
    category: "status",
    accuracy: 100,
    power: undefined,
    pp: 20,
    priority: 0,
    flags: {
        snatch: true,
        mirror: true,
        charge: true,
        heal: true,
        gravity: true
    },
    target: "selected_pokemon",
    type: "dark",
    effectId: "none",
    effectChance: 100
};
export default parting_shot;
