const anchor_shot = {
    id: "anchor-shot",
    name: "oremon.anchor-shot.name",
    description: "oremon.anchor-shot.description",
    category: "physical",
    accuracy: 100,
    power: 80,
    pp: 20,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "steel",
    effectId: "none",
    effectChance: undefined
};
export default anchor_shot;
