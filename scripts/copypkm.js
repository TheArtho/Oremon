const fs = require("fs");
const path = require("path");

const identifier = process.argv[2]; // ex: "cyndaquil"
if (!identifier) {
    console.error("Usage: node copyPokemon.js <identifier>");
    process.exit(1);
}

const BASE_DIR = __dirname;
const OUT_BASE = path.join(BASE_DIR, "../out/resource_pack");

const PATHS = {
    model: {
        from: path.join(OUT_BASE, `models/entity/${identifier}`, `${identifier}.geo.json`),
        to: path.join(BASE_DIR, `../packs/Resource/models/entity/${identifier}/${identifier}.geo.json`)
    },
    texture: {
        from: path.join(OUT_BASE, `textures/entity/${identifier}`, `${identifier}.png`),
        to: path.join(BASE_DIR, `../packs/Resource/textures/entity/${identifier}/${identifier}.png`)
    },
    texture_shiny: {
        from: path.join(OUT_BASE, `textures/entity/${identifier}`, `${identifier}_shiny.png`),
        to: path.join(BASE_DIR, `../packs/Resource/textures/entity/${identifier}/${identifier}_shiny.png`)
    },
    animation: {
        from: path.join(OUT_BASE, `animations/${identifier}`, `${identifier}.animation.json`),
        to: path.join(BASE_DIR, `../packs/Resource/animations/${identifier}/${identifier}.animation.json`)
    }
};

function ensureDir(filePath) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function copyFile(from, to) {
    if (fs.existsSync(from)) {
        ensureDir(to);
        fs.copyFileSync(from, to);
        console.log(`✓ Copied ${path.basename(from)} to ${to}`);
    } else {
        console.warn(`⚠ File not found: ${from}`);
    }
}

for (const key in PATHS) {
    const { from, to } = PATHS[key];
    copyFile(from, to);
}
