import { Stats } from "../OremonData";
import {Move} from "../../core/monster/Oremon";

export interface ISeriOremon {
    id: string;
    species: string;
    level: number;
    name: string;
    size: number;
    ivs: Stats;
    evs: Stats;
    item?: string;
    shiny: boolean;
    ballUsed: string;
    gender?: boolean;
    happiness: number;
    status?: string;
    formId: number;
    trainerId?: string;
    fainted: boolean;
    moves: (Move | undefined)[];
}
