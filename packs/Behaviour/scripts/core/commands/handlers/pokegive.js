import { PlayerSave } from "../../save/PlayerSave";
import { Oremon } from "../../monster/Oremon";
export function pokegive(player, args) {
    if (!player?.isOp()) {
        throw new Error("You don't have the permission to use that command.");
    }
    if (args === undefined || args?.length <= 0) {
        throw new Error("Command error: missing arguments \"species level\"");
    }
    if (args?.length > 2) {
        throw new Error("Command error: Too many arguments.");
    }
    const species = args[0].includes("oremon:") ? args[0] : `oremon:${args[0]}`;
    const level = Number(args[1]);
    const response = PlayerSave.data.get(player.id)?.giveMonster(new Oremon(species, { level }));
    player.sendMessage(response.message);
}
