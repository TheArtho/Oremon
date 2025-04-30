import { Oremon } from "../monster/Oremon";
import { expandCompactWildOremon } from "../monster/OremonUtils";
import { PlayerSave } from "../save/PlayerSave";
export class CaptureManager {
    static CaptureEntity(entity, player, projectile) {
        const family = entity.getComponent("type_family");
        if (family && family.hasTypeFamily("oremon")) {
            const wildData = entity.getDynamicProperty("oremon:wild_data");
            if (!wildData) {
                return;
            }
            const oremon = Oremon.fromWildData(expandCompactWildOremon(JSON.parse(wildData)));
            entity.remove();
            projectile.remove();
            PlayerSave.data.get(player.id)?.giveMonster(oremon);
            player.sendMessage(`${oremon.getName()} has been captured!`);
        }
    }
}
