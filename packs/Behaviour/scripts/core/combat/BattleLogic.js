import moveData from "../../data/moveData";
import { MathUtils } from "../utils/MathUtils";
import { TypeChart } from "../../data/TypeChart";
export class BattleLogic {
    // Priority
    static calculatePriority(actions) {
        const actionList = [];
        for (const [playerInfo, playerAction] of actions.entries()) {
            const battler = playerInfo.team[playerInfo.active];
            if (!battler)
                continue;
            actionList.push({
                battler,
                action: playerAction,
                player: playerInfo
            });
        }
        actionList.sort((a, b) => {
            const priorityA = BattleLogic.getActionPriority(a.action);
            const priorityB = BattleLogic.getActionPriority(b.action);
            if (priorityA !== priorityB) {
                return priorityB - priorityA; // Higher action priority first
            }
            const movePriorityA = BattleLogic.getMovePriority(a.action);
            const movePriorityB = BattleLogic.getMovePriority(b.action);
            if (movePriorityA !== movePriorityB) {
                return movePriorityB - movePriorityA; // Higher move priority first
            }
            return b.battler.getSpeed() - a.battler.getSpeed(); // Faster battler first
        });
        return actionList;
    }
    static getActionPriority(action) {
        switch (action.type) {
            case "run": return 3;
            case "switch": return 2;
            case "move": return 1;
            default: return 0;
        }
    }
    static getMovePriority(action) {
        if (action.type !== "move")
            return 0;
        const move = moveData[action.value];
        if (!move)
            return 0;
        return move.priority ?? 0;
    }
    static calculateDamage(moveId, attacker, defender) {
        const move = moveData[moveId];
        if (!move || !move.power)
            return {
                damage: 0,
                effectiveness: 0
            }; // No damage if move has no power
        const attackerLevel = attacker.getLevel();
        const movePower = move.power;
        const isSpecial = move.category === "special";
        const attackStat = isSpecial ? attacker.getSpeAtk() : attacker.getAtk();
        const defenseStat = isSpecial ? defender.getSpeDef() : defender.getDef();
        // Base damage
        let damage = Math.floor(Math.floor(((2 * attackerLevel) / 5 + 2) * attackStat * movePower / defenseStat) / 50) + 2;
        // Multiplier
        let modifier = 1;
        // STAB (Same Type Attack Bonus)
        if (attacker.getType(0) === move.type || attacker.getType(1) === move.type) {
            modifier *= 1.5;
        }
        // Type effectiveness
        const typeEffectiveness = BattleLogic.getTypeEffectiveness(move.type, defender);
        modifier *= typeEffectiveness;
        // Critical hit (simple random 1/24 chance for now)
        const isCritical = Math.random() < 1 / 24;
        if (isCritical) {
            modifier *= 1.5;
        }
        // Random factor between 0.85 and 1.00
        const randomFactor = MathUtils.clamp(Math.random(), 0.85, 1);
        modifier *= randomFactor;
        // Final damage
        damage = Math.floor(damage * modifier);
        return {
            damage: Math.max(1, damage), // Minimum 1 damage always
            effectiveness: typeEffectiveness
        };
    }
    static getTypeEffectiveness(attackType, defender) {
        let effectiveness = 1;
        const defendType1 = defender.getType(0);
        const defendType2 = defender.getType(1);
        if (defendType1) {
            const mult1 = TypeChart[attackType]?.[defendType1] ?? 1;
            effectiveness *= mult1;
        }
        if (defendType2) {
            const mult2 = TypeChart[attackType]?.[defendType2] ?? 1;
            effectiveness *= mult2;
        }
        return effectiveness;
    }
}
