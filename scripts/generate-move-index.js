const fs = require("fs-extra");
const path = require("path");

const MOVES_DIR = path.join(__dirname, "../src/data/moves");
const OUTPUT_FILE = path.join(__dirname, "../src/data", "moveData.ts");

// 🔐 Mots réservés JS/TS
const reservedWords = new Set([
    "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete",
    "do", "else", "enum", "export", "extends", "false", "finally", "for", "function",
    "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this",
    "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield"
]);

// ➕ Fonction de nom de variable JS safe
function makeSafeVarName(identifier) {
    let name = identifier.replace(/-/g, "_");
    if (/^\d/.test(name)) name = "_" + name;
    if (reservedWords.has(name)) name += "_";
    return name;
}

// 📄 Récupère tous les fichiers .ts sauf index.ts
const files = fs
    .readdirSync(MOVES_DIR)
    .filter(file => file.endsWith(".ts") && file !== "index.ts");

// 🧾 Génère les imports
const imports = files
    .map(file => {
        const id = path.basename(file, ".ts");
        const varName = makeSafeVarName(id);
        return `import ${varName} from "./moves/${id}";`;
    })
    .join("\n");

// 🗺️ Génère les entrées de l'objet final
const entries = files
    .map(file => {
        const id = path.basename(file, ".ts");
        const varName = makeSafeVarName(id);
        return `  "${id}": ${varName}`;
    })
    .join(",\n");

// 📦 Assemble le fichier final
const fileContent = `// Auto-generated file — do not edit manually.
import { MoveData } from "../types/MoveData";
${imports}

const moveData: { [id: string]: MoveData } = {
${entries}
};

export default moveData;
`;

fs.writeFileSync(OUTPUT_FILE, fileContent, "utf8");
console.log("\x1b[32mmoveData map generated successfully.\x1b[0m");
