import { PlayerSave } from "./PlayerSave";
export class PlayerSaveManager {
    static load(player) {
        const raw = player.getDynamicProperty(this.DATA_KEY);
        try {
            return new PlayerSave(player.id, JSON.parse(raw));
        }
        catch {
            console.warn(`[Oremon] Failed to parse player data for ${player.name}`);
        }
        return new PlayerSave(player.id);
    }
    static save(player, data) {
        try {
            player.setDynamicProperty(this.DATA_KEY, JSON.stringify(data));
        }
        catch (e) {
            console.warn(`[Oremon] Failed to save player data for ${player.name}: ${e}`);
        }
    }
    static reset(player) {
        try {
            player.setDynamicProperty(this.DATA_KEY, JSON.stringify(new PlayerSave(player.id)));
        }
        catch (e) {
            console.warn(`[Oremon] Failed to reset player data for ${player.name}: ${e}`);
        }
    }
}
PlayerSaveManager.DATA_KEY = "oremon:player_data";
