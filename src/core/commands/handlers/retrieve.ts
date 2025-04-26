import {Player} from "@minecraft/server";
import {PlayerMonEntityManager} from "../../entity/PlayerMonEntityManager";

export function retrieve(player: Player, args?: string[]) {
    if (args && args.length > 1) {
        throw new Error("Command error: Too many arguments.");
    }
    PlayerMonEntityManager.playerRetrieve(player, Number(args![0]));
}