import {Oremon} from "../core/monster/Oremon";
import {OremonBattler} from "../core/combat/OremonBattler";
import {PlayerType} from "../enums/battle";
import {Player} from "@minecraft/server";

export interface BattleTrainer {
    player?: Player;
    type: "trainer" | "wild_pokemon"
    team: Oremon[];
    active?: number;
}

export interface BattleOptions {
    battleMode?: BattleMode;
    canloose?: boolean;
}

export type BattleState = "starting" | "awaitingInput" | "processingTurn" | "finished";

export type BattleMode = "single" | "double";

export interface PlayerInfo {
    player?: Player;
    name: string;
    type: PlayerType;
    active: number;
    team: OremonBattler[];
}

export interface PlayerAction {
    type: "move" | "switch" | "run";
    /** moveId or switch slot */
    value: string;
}