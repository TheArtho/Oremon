const ice_ball = {
    id: "ice-ball",
    name: "oremon.ice-ball.name",
    description: "oremon.ice-ball.description",
    category: "physical",
    accuracy: 90,
    power: 30,
    pp: 20,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true,
        pulseBased: true
    },
    target: "selected_pokemon",
    type: "ice",
    effectId: "none",
    effectChance: undefined
};
export default ice_ball;
