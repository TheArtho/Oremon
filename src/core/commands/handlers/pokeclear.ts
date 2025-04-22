import {Player} from "@minecraft/server";
import {PlayerSave} from "../../save/PlayerSave";
import {PlayerSaveManager} from "../../save/PlayerSaveManager";

export function pokeclear(player: Player, args?: string[]) {
    if (!player?.isOp()) {
        throw new Error("You don't have the permission to use that command.");
    }
    if (args && args.length > 0) {
        throw new Error("Command error: Too many arguments.");
    }

    PlayerSaveManager.reset(player);
    PlayerSave.data.set(player.id, new PlayerSave(player));
    player.sendMessage("Player save has been cleared!")
}