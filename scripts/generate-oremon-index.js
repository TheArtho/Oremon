const fs = require("fs-extra");
const path = require("path");

const OREMON_DIR = "./src/data/oremon";
const OUTPUT_FILE = path.join(OREMON_DIR, "index.ts");

const files = fs
    .readdirSync(OREMON_DIR)
    .filter(file => file.endsWith(".ts") && file !== "index.ts")
    .sort();

const missingDefaultExports = [];

const imports = files
    .map((file) => {
        const varName = path.basename(file, ".ts");
        const fullPath = path.join(OREMON_DIR, file);
        const content = fs.readFileSync(fullPath, "utf-8");

        // Vérifie que le fichier contient bien `export default`
        if (!content.includes("export default")) {
            missingDefaultExports.push(file);
        }

        return `import ${varName} from "./${varName}";`;
    })
    .join("\n");

const exportList = files
    .map(file => path.basename(file, ".ts"))
    .join(",\n  ");

const content = `${imports}

export default [
  ${exportList}
];
`;

fs.writeFileSync(OUTPUT_FILE, content);

if (missingDefaultExports.length > 0) {
    console.warn("⚠️ Missing `export default` in:");
    missingDefaultExports.forEach(file => console.warn(`  - ${file}`));
    process.exitCode = 1; // ne bloque pas mais signale un souci
} else {
    console.log("\x1b[32mOremon index.ts generated\x1b[0m");
}
