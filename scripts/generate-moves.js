const fs = require("fs-extra");
const path = require("path");
const Database = require("better-sqlite3");

const db = new Database(path.join(__dirname, "../db/veekun-pokedex.sqlite"));
const outputDir = path.join(__dirname, "../src/data/moves");

fs.ensureDirSync(outputDir);

// Mots réservés de JavaScript/TypeScript
const reservedWords = new Set([
    "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete",
    "do", "else", "enum", "export", "extends", "false", "finally", "for", "function",
    "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this",
    "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield"
]);

// Mapping helpers
const typeMap = Object.fromEntries(
    db.prepare("SELECT id, identifier FROM enums").all().map(row => [row.id, row.identifier.toLowerCase()])
);

const targetMap = {
    1: "specific_move",
    2: "selected_pokemon_me_first",
    3: "ally",
    4: "users_field",
    5: "user_or_ally",
    6: "opponents_field",
    7: "user",
    8: "random_opponent",
    9: "all_other_pokemon",
    10: "selected_pokemon",
    11: "all_opponents",
    12: "entire_field",
    13: "user_and_allies",
    14: "all_pokemon"
};

const categoryMap = {
    1: "Status",
    2: "Physical",
    3: "Special"
};

const flagMap = {
    1: "contact", 2: "protectable", 3: "reflectable", 4: "snatch",
    5: "mirror", 6: "defrost", 7: "charge", 8: "recharge", 9: "heal",
    10: "soundBased", 11: "bite", 12: "punching", 13: "powderBased",
    14: "gravity", 15: "dance", 16: "ballistics", 17: "distance",
    18: "pulseBased", 19: "authentic", 20: "mental"
};

function getFlagsForMove(moveId) {
    const rows = db.prepare("SELECT move_flag_id FROM move_flag_map WHERE move_id = ?").all(moveId);

    const knownFlags = rows
        .map(r => flagMap[r.move_flag_id])
        .filter(Boolean);

    const unknownFlags = rows
        .map(r => r.move_flag_id)
        .filter(id => !flagMap[id]);

    if (unknownFlags.length > 0) {
        console.warn(`⚠️ Unknown flag IDs for move ${moveId}:`, unknownFlags);
    }

    if (!knownFlags.length) return "{}";

    return `{\n${knownFlags.map(f => `  ${f}: true`).join(",\n")}\n}`;
}

// Transforme un identifiant en nom de variable JS/TS safe
function makeSafeVarName(identifier) {
    let name = identifier.replace(/-/g, "_");
    if (/^\d/.test(name)) name = "_" + name;
    if (reservedWords.has(name)) name += "_";
    return name;
}

// Main query
const moves = db.prepare(`
    SELECT m.id, m.identifier, m.power, m.pp, m.accuracy, m.priority,
           m.damage_class_id, m.target_id, m.type_id, m.effect_chance
    FROM moves m
    ORDER BY m.id
`).all();

for (const move of moves) {
    const {
        id, identifier, power, pp, accuracy, priority,
        damage_class_id, target_id, type_id, effect_chance
    } = move;

    const varName = makeSafeVarName(identifier);
    const filePath = path.join(outputDir, `${identifier}.ts`);

    const tsContent = `import { MoveData } from "../../types/MoveData";

const ${varName}: MoveData = {
  id: "${identifier}",
  name: "oremon.${identifier}.name",
  description: "oremon.${identifier}.description",
  category: "${categoryMap[damage_class_id].toLowerCase()}",
  accuracy: ${accuracy ?? "undefined"},
  power: ${power ?? "undefined"},
  pp: ${pp ?? 0},
  priority: ${priority},
  flags: ${getFlagsForMove(id)},
  target: "${targetMap[target_id] ?? "selected_pokemon"}",
  type: "${typeMap[type_id] ?? "normal"}",
  effectId: "none",
  effectChance: ${effect_chance ?? "undefined"}
};

export default ${varName};
`;

    fs.writeFileSync(filePath, tsContent, "utf8");
    console.log(`✅ Generated move: ${identifier}.ts`);
}

console.log("\x1b[32mAll MoveData files generated!\x1b[0m");
