export class VectorUtils {
    static distance(v1, v2) {
        return VectorUtils.vlength(VectorUtils.subtract(v1, v2));
    }
    static subtract(v1, v2) {
        return {
            x: v1.x - v2.x,
            y: v1.y - v2.y,
            z: v1.z - v2.z
        };
    }
    static add(v1, v2) {
        return {
            x: v1.x + v2.x,
            y: v1.y + v2.y,
            z: v1.z + v2.z
        };
    }
    static multiply(v1, value) {
        return {
            x: v1.x * value,
            y: v1.y * value,
            z: v1.z * value
        };
    }
    static vlength(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    }
    static normalize(v) {
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
