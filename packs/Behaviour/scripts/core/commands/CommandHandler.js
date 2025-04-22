import { pokegive } from "./handlers/pokegive";
import { pokeclear } from "./handlers/pokeclear";
export class CommandHandler {
    static execute(commandName, player, args) {
        const command = this.commands.get(commandName);
        if (command) {
            try {
                command(player, args);
            }
            catch (e) {
                player.sendMessage(`§c${e}`);
            }
        }
        else {
            player.sendMessage(`§cUnknown command : !${commandName}`);
        }
    }
}
CommandHandler.commands = new Map([
    ["pokegive", pokegive],
    ["pokeclear", pokeclear],
]);
