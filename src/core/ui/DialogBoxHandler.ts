import {Player, system} from "@minecraft/server";

export class DialogBoxHandler {
    /*
    Takes 2 ticks to show the dialog box
     */
    static async Show(player: Player, text: string = "") {
        player.onScreenDisplay.setTitle("oremonDialog:on");
        await system.waitTicks(1);
        await this.SetText(player, text);
    }

    /*
    Takes 2 ticks to hide the dialog box
     */
    static async Hide(player: Player) {
        await this.SetText(player, "");
        await system.waitTicks(1);
        player.onScreenDisplay.setTitle("oremonDialog:off");
        await system.waitTicks(1);
    }

    static async SetText(player: Player, text: string) {
        player.onScreenDisplay.setTitle(`oremonDialogText:${text}`);
        await system.waitTicks(2);
    }

    static async DisplayText(player: Player, text: string, options: {waitTicks?: number, instant?: boolean, textSpeed?: number}) {
        let str = "";
        const waitTicks = options.waitTicks ?? 20;
        const instant = options.instant ?? false;
        const textSpeed = Math.ceil(Math.max(1, options.textSpeed ?? 1));

        if (instant) {
            await DialogBoxHandler.Show(player, text);
        } else {
            await DialogBoxHandler.Show(player);
            for (let i = 0; i < text.length; i += textSpeed) {
                str += text.slice(i, i + textSpeed);
                await this.SetText(player, str);
            }
        }

        await system.waitTicks(waitTicks);
        await DialogBoxHandler.Hide(player);
    }

}