export class MathUtils {
    /**
     * Clamp une valeur entre min et max
     */
    static clamp(value: number, min: number, max: number): number {
        return Math.max(min, Math.min(max, value));
    }

    /**
     * Interpolation linéaire entre a et b selon t (de 0 à 1)
     */
    static lerp(a: number, b: number, t: number): number {
        return a + (b - a) * t;
    }

    /**
     * Retourne t entre a et b pour une valeur interpolée
     */
    static inverseLerp(a: number, b: number, value: number): number {
        if (a === b) return 0;
        return (value - a) / (b - a);
    }

    /**
     * Map une valeur d'un intervalle vers un autre
     */
    static mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
        const t = this.inverseLerp(inMin, inMax, value);
        return this.lerp(outMin, outMax, t);
    }

    /**
     * Arrondit un nombre à un certain nombre de décimales
     */
    static roundTo(value: number, decimals: number): number {
        const factor = Math.pow(10, decimals);
        return Math.round(value * factor) / factor;
    }

    /**
     * Convertit des degrés en radians
     */
    static degreesToRadians(degrees: number): number {
        return degrees * (Math.PI / 180);
    }

    /**
     * Convertit des radians en degrés
     */
    static radiansToDegrees(radians: number): number {
        return radians * (180 / Math.PI);
    }

    /**
     * Vérifie si un nombre est une puissance de 2
     */
    static isPowerOfTwo(value: number): boolean {
        return (value > 0) && ((value & (value - 1)) === 0);
    }

    /**
     * Donne la prochaine puissance de 2 supérieure ou égale à value
     */
    static nextPowerOfTwo(value: number): number {
        if (value <= 0) return 1;
        return Math.pow(2, Math.ceil(Math.log2(value)));
    }
}