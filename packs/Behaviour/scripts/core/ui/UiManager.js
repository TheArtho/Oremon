import { PlayerSave } from "../save/PlayerSave";
export class UiManager {
    static displayPokemonTeam(player) {
        let actionbarText = "";
        PlayerSave.data.get(player.id)?.getTeam().forEach((oremon, index) => {
            if (index == 0) {
                actionbarText += oremon?.getName();
            }
            else {
                actionbarText += " " + oremon?.getName();
            }
        });
        player.onScreenDisplay.setActionBar(actionbarText);
    }
}
