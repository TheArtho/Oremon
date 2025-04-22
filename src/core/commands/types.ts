// handlers/types.ts
import { Player } from "@minecraft/server";

export type CommandFunction = (player: Player, args?: string[]) => void;