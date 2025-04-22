// events/CommandEventHandler.ts
import { world } from "@minecraft/server";
import {CommandHandler} from "./CommandHandler";

export class CommandEventHandler {
    static register(): void {
        world.beforeEvents.chatSend.subscribe((event) => {
            const message = event.message.trim();

            if (!message.startsWith("!")) return;

            const parts = message.slice(1).split(" ");
            if (parts.length === 0) return;

            const command = parts[0];
            const args = parts.slice(1);

            try {
                CommandHandler.execute(command, event.sender, args);
            } catch (e) {
                event.sender.sendMessage(`§cCommand error ${command} : ${e}`);
            }

            event.cancel = true;
        });
    }
}
