import {Stats} from "../../types/OremonData";
import {IWildOremondata} from "../../types/serialization/IWildOremondata";
import {CompactWildOremon} from "../../types/serialization/CompactWildOremon";

/*
const EV_LIMIT = 510;
const EV_STAT_LIMIT = 252;
const NAME_LIMIT = 10;
*/

export function generateRandomIVs(): Stats {
    return {
        hp: Math.floor(Math.random() * 32),
        atk: Math.floor(Math.random() * 32),
        def: Math.floor(Math.random() * 32),
        atk_spe: Math.floor(Math.random() * 32),
        def_spe: Math.floor(Math.random() * 32),
        spd: Math.floor(Math.random() * 32)
    };
}

export function generateFallbackId(): string {
    return 'xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function compactWildOremon(data: IWildOremondata): CompactWildOremon {
    return [
        data.species,
        data.level,
        data.shiny,
        data.size,
        data.gender,
        data.formId
    ];
}