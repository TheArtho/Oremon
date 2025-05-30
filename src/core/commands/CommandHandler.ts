// handlers/CommandHandler.ts
import {CommandFunction} from "./types";
import {Player} from "@minecraft/server";
import {pokegive} from "./handlers/pokegive";
import {pokeclear} from "./handlers/pokeclear";
import {battle} from "./handlers/battle";
import {sendout} from "./handlers/sendout";
import {retrieve} from "./handlers/retrieve";

export class CommandHandler {
    private static commands = new Map<string, CommandFunction>([
        ["pokegive", pokegive],
        ["pokeclear", pokeclear],
        ["battle", battle],
        ["sendout", sendout],
        ["retrieve", retrieve]
    ]);

    static execute(commandName: string, player : Player, args?: string[]) {
        const command = this.commands.get(commandName);
        if (command) {
            try {
                command(player, args);
            }
            catch (e) {
                player.sendMessage(`§c${e}`);
            }
        } else {
            player.sendMessage(`§cUnknown command : !${commandName}`);
        }
    }
}
