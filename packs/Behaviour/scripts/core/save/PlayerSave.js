export class PlayerSave {
    constructor(playerId, seriPlayerSave = {}) {
        this.playerId = playerId;
        const { testValue } = seriPlayerSave;
        this.testValue = testValue ?? 0;
    }
}
PlayerSave.data = new Map();
