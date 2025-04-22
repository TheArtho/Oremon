const fs = require("fs-extra");
const path = require("path");

const FORMS_DIR = path.join(__dirname, "../src/data/forms");
const OUTPUT_FILE = path.join(__dirname, "../src/data", "formData.ts");

// 🔍 Récupère tous les fichiers .ts sauf index.ts
const files = fs
    .readdirSync(FORMS_DIR)
    .filter(file => file.endsWith(".ts") && file !== "index.ts");

// 🔤 Génère les imports
const imports = files
    .map(file => {
        const base = path.basename(file, ".ts");
        const varName = `${base.replace(/-/g, "_")}Forms`;
        return `import ${varName} from "./forms/${base}";`;
    })
    .join("\n");

// 🧱 Crée les entrées de l’objet final
const entries = files
    .map(file => {
        const base = path.basename(file, ".ts");
        const varName = `${base.replace(/-/g, "_")}Forms`;
        return `  "${base}": ${varName}`;
    })
    .join(",\n");

const fileContent = `// Auto-generated file — do not edit manually.
import { FormData } from "../types/OremonData";
${imports}

const formData: { [key: string]: FormData[] } = {
${entries}
};

export default formData;
`;

fs.writeFileSync(OUTPUT_FILE, fileContent, "utf8");
console.log("\x1b[32mformData map generated successfully.\x1b[0m");
