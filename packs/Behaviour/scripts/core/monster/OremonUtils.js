/*
const EV_LIMIT = 510;
const EV_STAT_LIMIT = 252;
const NAME_LIMIT = 10;
*/
export function generateRandomIVs() {
    return {
        hp: Math.floor(Math.random() * 32),
        atk: Math.floor(Math.random() * 32),
        def: Math.floor(Math.random() * 32),
        atk_spe: Math.floor(Math.random() * 32),
        def_spe: Math.floor(Math.random() * 32),
        spd: Math.floor(Math.random() * 32)
    };
}
export function generateFallbackId() {
    return 'xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
/**
 * Compacts a IWildOremondata into a compressed CompactWildOremon array.
 * @param data IWildOremondata object
 * @returns CompactWildOremon array
 */
export function compactWildOremon(data) {
    return [
        data.species,
        data.level,
        data.shiny,
        data.size,
        data.gender,
        data.formId
    ];
}
/**
 * Expands a CompactWildOremon array back into a full IWildOremondata object.
 * @param data CompactWildOremon tuple
 * @returns IWildOremondata object
 */
export function expandCompactWildOremon(data) {
    return {
        species: data[0],
        level: data[1],
        shiny: data[2],
        size: data[3],
        gender: data[4],
        formId: data[5]
    };
}
