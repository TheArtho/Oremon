import {Vector3} from "@minecraft/server";
import {MathUtils} from "./MathUtils";

export class VectorUtils {
    static distance(v1: Vector3, v2: Vector3): number {
        return VectorUtils.vlength(VectorUtils.subtract(v1, v2));
    }

    static subtract(v1: Vector3, v2: Vector3): Vector3 {
        return {
            x: v1.x - v2.x,
            y: v1.y - v2.y,
            z: v1.z - v2.z
        };
    }

    static add(v1: Vector3, v2: Vector3): Vector3 {
        return {
            x: v1.x + v2.x,
            y: v1.y + v2.y,
            z: v1.z + v2.z
        };
    }

    static multiply(v1: Vector3, value: number): Vector3 {
        return {
            x: v1.x * value,
            y: v1.y * value,
            z: v1.z * value
        };
    }

    static vlength(v: Vector3): number {
        return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    }

    static normalize(v: Vector3): Vector3 {
        const len = VectorUtils.vlength(v);
        if (len === 0) {
            return { x: 0, y: 0, z: 0 };
        }
        return {
            x: v.x / len,
            y: v.y / len,
            z: v.z / len
        };
    }

    /**
     * Rotates a vector horizontally (around the Y axis) by a given angle in degrees.
     * Useful for rotating directions in the horizontal plane.
     */
    static rotateY(v: Vector3, angleDegrees: number): Vector3 {
        const angleRad = MathUtils.degreesToRadians(angleDegrees);
        const cos = Math.cos(angleRad);
        const sin = Math.sin(angleRad);

        return {
            x: v.x * cos - v.z * sin,
            y: v.y, // On ne touche pas à Y
            z: v.x * sin + v.z * cos
        };
    }

    /**
     * Offsets a position around a target based on angle and distance.
     * This is useful for placing a camera or an entity around another.
     *
     * @param playerPos - The reference point (usually the player)
     * @param targetPos - The center or focal point
     * @param distance - How far away the offset point should be
     * @param angleDegrees - Angle around the Y axis
     * @returns A new position offset around the target
     */
    static offsetAroundTarget(playerPos: Vector3, targetPos: Vector3, distance: number, angleDegrees: number): Vector3 {
        const dir = VectorUtils.normalize(VectorUtils.subtract(playerPos, targetPos));
        const rotatedDir = VectorUtils.rotateY(dir, angleDegrees);
        const offset = VectorUtils.multiply(rotatedDir, distance);

        return VectorUtils.add(targetPos, offset);
    }

    /**
     * Computes the horizontal (Y) and vertical (X) rotation needed for an entity or camera
     * to look from a position to a target.
     *
     * @param from - Origin position (usually the viewer)
     * @param to - Target position (what you want to look at)
     * @returns Rotation as an object { x, y } in degrees
     */
    static lookAt(from: Vector3, to: Vector3): { x: number, y: number } {
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const dz = to.z - from.z;

        const horizontalDist = Math.sqrt(dx * dx + dz * dz);

        const yaw = MathUtils.radiansToDegrees(Math.atan2(dz, dx)) - 90; // important: -90 to align with Minecraft's yaw
        const pitch = -MathUtils.radiansToDegrees(Math.atan2(dy, horizontalDist)); // negative pitch = up

        return { x: pitch, y: yaw };
    }
}