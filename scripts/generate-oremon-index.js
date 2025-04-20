const fs = require("fs-extra");
const path = require("path");

const OREMON_DIR = path.join(__dirname, "../src/data/oremon");
const OUTPUT_FILE = path.join(__dirname, "../src/data", "oremonData.ts");

// 🔍 Récupère tous les fichiers .ts sauf index.ts
const files = fs
    .readdirSync(OREMON_DIR)
    .filter(file => file.endsWith(".ts") && file !== "index.ts");

// 🔤 Génère les imports
const imports = files
    .map(file => {
        const varName = path.basename(file, ".ts").replace(/-/g, "_");
        return `import ${varName} from "./oremon/${path.basename(file, ".ts")}";`;
    })
    .join("\n");

// 🧱 Crée les entrées de l’objet final
const entries = files
    .map(file => {
        const id = path.basename(file, ".ts").toLowerCase().replace(/-/g, "_");
        return `  "oremon:${path.basename(file, ".ts")}": ${id}`;
    })
    .join(",\n");

const fileContent = `// Auto-generated file — do not edit manually.
import { OremonData } from "../types/OremonData";
${imports}

const oremonData: { [key: string]: OremonData } = {
${entries}
};

export default oremonData;
`;

fs.writeFileSync(OUTPUT_FILE, fileContent, "utf8");
console.log("\x1b[32moremonData map generated successfully.\x1b[0m");
