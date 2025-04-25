const arm_thrust = {
    id: "arm-thrust",
    name: "oremon.arm-thrust.name",
    description: "oremon.arm-thrust.description",
    category: "physical",
    accuracy: 100,
    power: 15,
    pp: 20,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true
    },
    target: "selected_pokemon",
    type: "fighting",
    effectId: "none",
    effectChance: undefined
};
export default arm_thrust;
