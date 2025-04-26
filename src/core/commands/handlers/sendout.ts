import {Player} from "@minecraft/server";
import {PlayerMonEntityManager} from "../../entity/PlayerMonEntityManager";

export function sendout(player: Player, args?: string[]) {
    if (args && args.length > 1) {
        throw new Error("Command error: Too many arguments.");
    }
    const hitBlock = player.dimension.getBlockFromRay(player.getHeadLocation(),
        player.getViewDirection(),
        {maxDistance: 20});
    if (hitBlock) {
        const hitPosition = {
            x: hitBlock.block.location.x + hitBlock.faceLocation.x,
            y: hitBlock.block.location.y + hitBlock.faceLocation.y,
            z: hitBlock.block.location.z + hitBlock.faceLocation.z
        };
        PlayerMonEntityManager.playerSendOut(player, Number(args![0]), hitPosition);
    }
}