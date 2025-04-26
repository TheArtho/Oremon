import {Entity, Vector3} from "@minecraft/server";

export function moveEntityToLocation(entity: Entity, targetPos: Vector3, speed: number): Vector3 | null {
    const pos = entity.location;
    const dx = targetPos.x - pos.x, dy = targetPos.y - pos.y, dz = targetPos.z - pos.z;
    const mag = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (!mag) return null;

    const x = (dx / mag) * speed, y = (dy / mag) * speed, z = (dz / mag) * speed;
    /*
    if (entity instanceof Player) {
        const hMag = Math.sqrt(x * x + z * z);
        return { x: x / hMag, z: z / hMag, strength: hMag, y };
    }
    */
    return { x, y, z };
}