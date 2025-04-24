import {Vector3} from "@minecraft/server";

export class VectorUtils {
    static distance(v1: Vector3, v2: Vector3): number {
        const dx = v1.x - v2.x;
        const dy = v1.y - v2.y;
        const dz = v1.z - v2.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    static subtract(v1: Vector3, v2: Vector3): Vector3 {
        return {
            x: Math.abs(v1.x - v2.x),
            y: Math.abs(v1.y - v2.y),
            z: Math.abs(v1.z - v2.z)
        };
    }

    static add(v1: Vector3, v2: Vector3): Vector3 {
        return {
            x: Math.abs(v1.x + v2.x),
            y: Math.abs(v1.y + v2.y),
            z: Math.abs(v1.z + v2.z)
        };
    }

    static multiply(v1: Vector3, value: number): Vector3 {
        return {
            x: Math.abs(v1.x * value),
            y: Math.abs(v1.y * value),
            z: Math.abs(v1.z * value)
        };
    }
}