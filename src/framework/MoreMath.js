class MoreMath {
    static isInRange(value, inclusiveMin, exclusiveMax) {
        return (inclusiveMin <= value) && (value < exclusiveMax);
    }

    /**
     * Linear interpolation by t-% from a to b.
     * 
     * @param {number} t 
     * @param {number} a 
     * @param {number} b 
     */
    static lerp(t, a, b) {
        return a + t * (b - a);
    }
}

export { MoreMath };