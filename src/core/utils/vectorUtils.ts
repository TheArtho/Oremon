import {Vector3} from "@minecraft/server";

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
}