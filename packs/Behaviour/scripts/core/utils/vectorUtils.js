export class VectorUtils {
    static distance(v1, v2) {
        const dx = v1.x - v2.x;
        const dy = v1.y - v2.y;
        const dz = v1.z - v2.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    static subtract(v1, v2) {
        return {
            x: Math.abs(v1.x - v2.x),
            y: Math.abs(v1.y - v2.y),
            z: Math.abs(v1.z - v2.z)
        };
    }
    static add(v1, v2) {
        return {
            x: Math.abs(v1.x + v2.x),
            y: Math.abs(v1.y + v2.y),
            z: Math.abs(v1.z + v2.z)
        };
    }
    static multiply(v1, value) {
        return {
            x: Math.abs(v1.x * value),
            y: Math.abs(v1.y * value),
            z: Math.abs(v1.z * value)
        };
    }
}
