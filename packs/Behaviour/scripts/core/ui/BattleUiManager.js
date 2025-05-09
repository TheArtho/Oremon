export class BattleUiManager {
    static UpdatePlayerHpBar(player, value) {
        player.onScreenDisplay.setTitle(`playerhpbar:${value}`);
    }
    static UpdatePlayerHpText(player, value) {
        player.onScreenDisplay.setTitle(`playerhptext:${value}`);
    }
    static UpdatePlayerName(player, value) {
        player.onScreenDisplay.setTitle(`playerbattlername:${value}`);
    }
    static UpdatePlayerLevel(player, value) {
        player.onScreenDisplay.setTitle(`playerbattlerlevel:${value}`);
    }
    /*
    static UpdatePlayerTeam(player: Player, value: string) {

    }
 */
    static UpdateOpponentHpBar(player, value) {
        player.onScreenDisplay.setTitle(`opponenthpbar:${value}`);
    }
    static UpdateOpponentName(player, value) {
        player.onScreenDisplay.setTitle(`opponentbattlername:${value}`);
    }
    static UpdateOpponentLevel(player, value) {
        player.onScreenDisplay.setTitle(`opponentbattlerlevel:${value}`);
    }
}
