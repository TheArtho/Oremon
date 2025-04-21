import {ISeriPlayerSave} from "../../types/serialization/ISeriPlayerSave";

export class PlayerSave {
    static data = new Map<string, PlayerSave>();

    playerId : string;
    testValue: number;

    constructor(playerId : string, seriPlayerSave: ISeriPlayerSave = {}) {
        this.playerId = playerId;
        const { testValue } = seriPlayerSave;
        this.testValue = testValue ?? 0;
    }
}