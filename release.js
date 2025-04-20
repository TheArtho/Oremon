const fs = require("fs-extra");
const path = require("path");
const archiver = require("archiver");

const config = require("./buildconfig.json");
const modName = config.name || "MyMod";

// Path to compiled packs
const behaviorDir = path.join(__dirname, "packs", "Behaviour");
const resourceDir = path.join(__dirname, "packs", "Resource");
const releaseDir = path.join(__dirname, "release");

// .mcaddon file name
const outputFile = path.join(releaseDir, `${modName}.mcaddon`);

async function createMcaddon() {
    await fs.ensureDir(releaseDir);

    const output = fs.createWriteStream(outputFile);
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", () => {
        console.log(`\x1b[32m[Release] ${archive.pointer()} bytes written to ${outputFile}\x1b[0m`);
    });

    archive.on("error", err => {
        throw err;
    });

    archive.pipe(output);

    // Ajouter les packs à la racine du .mcaddon
    archive.directory(behaviorDir, `${modName} BP`);
    archive.directory(resourceDir, `${modName} RP`);

    await archive.finalize();
}

createMcaddon().catch(err => {
    console.error("[Release] Failed to create .mcaddon:", err);
});
