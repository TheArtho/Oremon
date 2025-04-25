const fs = require("fs-extra");
const path = require("path");
const archiver = require("archiver");

const config = require("./buildconfig.json");
const modName = config.name || "MyMod";

// Dossiers des packs
const behaviorDir = path.join(__dirname, "packs", "Behaviour");
const resourceDir = path.join(__dirname, "packs", "Resource");
const releaseDir = path.join(__dirname, "release");

// Fichiers de sortie
const mcaddonFile = path.join(releaseDir, `${modName}.mcaddon`);
const behaviorPackFile = path.join(releaseDir, `${modName} BP.mcpack`);
const resourcePackFile = path.join(releaseDir, `${modName} RP.mcpack`);

// Fonction générique pour créer un zip
async function createZip(inputDir, outputFile) {
    await fs.ensureDir(path.dirname(outputFile));

    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(outputFile);
        const archive = archiver("zip", { zlib: { level: 9 } });

        output.on("close", () => {
            console.log(`\x1b[32m[Release] ${archive.pointer()} bytes written to ${outputFile}\x1b[0m`);
            resolve();
        });

        archive.on("error", reject);
        archive.pipe(output);
        archive.directory(inputDir, false);
        archive.finalize();
    });
}

async function createMcaddon() {
    await fs.ensureDir(releaseDir);

    const output = fs.createWriteStream(mcaddonFile);
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", () => {
        console.log(`\x1b[32m[Release] ${archive.pointer()} bytes written to ${mcaddonFile}\x1b[0m`);
    });

    archive.on("error", err => {
        throw err;
    });

    archive.pipe(output);
    archive.directory(behaviorDir, `${modName} BP`);
    archive.directory(resourceDir, `${modName} RP`);
    await archive.finalize();
}

async function buildAll() {
    try {
        console.log("[Release] Creating .mcpack files...");
        await createZip(behaviorDir, behaviorPackFile);
        await createZip(resourceDir, resourcePackFile);

        console.log("[Release] Creating .mcaddon file...");
        await createMcaddon();

        console.log("\x1b[36m[Release] All files created successfully!\x1b[0m");
    } catch (err) {
        console.error("[Release] Failed to create release files:", err);
    }
}

buildAll();
