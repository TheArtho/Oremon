export class OremonEntityManager {
    /**
     * Finds a valid location around the given center location
     * @param dimension Targeted dimension
     * @param center Base position
     * @param searchRadius Maximum search radius
     * @param verticalMaxDrop Max vertical drop distance
     */
    static findValidSpawnLocation(dimension, center, searchRadius = 4, verticalMaxDrop = 10) {
        for (let radius = 0; radius <= searchRadius; radius++) {
            for (let dx = -radius; dx <= radius; dx++) {
                for (let dz = -radius; dz <= radius; dz++) {
                    const checkX = center.x + dx;
                    const checkZ = center.z + dz;
                    for (let dy = 0; dy <= verticalMaxDrop; dy++) {
                        const y = center.y - dy;
                        const block = dimension.getBlock({ x: checkX, y, z: checkZ });
                        const above1 = dimension.getBlock({ x: checkX, y: y + 1, z: checkZ });
                        const above2 = dimension.getBlock({ x: checkX, y: y + 2, z: checkZ });
                        if (block?.typeId !== "minecraft:air" &&
                            above1?.typeId === "minecraft:air" &&
                            above2?.typeId === "minecraft:air") {
                            return { x: checkX + 0.5, y: y + 1, z: checkZ + 0.5 }; // centré
                        }
                    }
                }
            }
        }
        return undefined;
    }
}
