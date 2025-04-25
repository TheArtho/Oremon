const hammer_arm = {
    id: "hammer-arm",
    name: "oremon.hammer-arm.name",
    description: "oremon.hammer-arm.description",
    category: "physical",
    accuracy: 90,
    power: 100,
    pp: 10,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true,
        recharge: true
    },
    target: "selected_pokemon",
    type: "fighting",
    effectId: "none",
    effectChance: 100
};
export default hammer_arm;
