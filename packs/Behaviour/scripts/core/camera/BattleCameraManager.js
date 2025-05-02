import { VectorUtils } from "../utils/VectorUtils";
export class BattleCameraManager {
    static BattleClassicCamera(playerPos, opponentPos, easeOption, dimension) {
        const center = VectorUtils.add(opponentPos, VectorUtils.multiply(VectorUtils.subtract(playerPos, opponentPos), 0.5));
        const rawLocation = VectorUtils.offsetAroundTarget(playerPos, opponentPos, 8, -30);
        const location = { x: rawLocation.x, y: rawLocation.y + 1, z: rawLocation.z };
        // Step up vertically if we're inside a solid block
        let safeY = location.y;
        const maxStep = 10;
        for (let i = 0; i < maxStep; i++) {
            const block = dimension.getBlock({ x: location.x, y: safeY, z: location.z });
            if (block?.isAir || block?.typeId === "minecraft:air") {
                location.y = safeY;
                break;
            }
            safeY += 1;
        }
        const rotation = VectorUtils.lookAt(location, center);
        return {
            easeOptions: easeOption,
            location,
            rotation
        };
    }
}
