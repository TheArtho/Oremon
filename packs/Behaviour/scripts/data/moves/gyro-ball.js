const gyro_ball = {
    id: "gyro-ball",
    name: "oremon.gyro-ball.name",
    description: "oremon.gyro-ball.description",
    category: "physical",
    accuracy: 100,
    power: undefined,
    pp: 5,
    priority: 0,
    flags: {
        contact: true,
        snatch: true,
        charge: true,
        pulseBased: true
    },
    target: "selected_pokemon",
    type: "steel",
    effectId: "none",
    effectChance: undefined
};
export default gyro_ball;
