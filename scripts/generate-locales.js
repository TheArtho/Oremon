const fs = require("fs-extra");
const path = require("path");
const Database = require("better-sqlite3");

const db = new Database(path.join(__dirname, "../db/veekun-pokedex.sqlite"));
const outputDir = path.join(__dirname, "../src/i18n");

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 1️⃣ Récupérer toutes les langues (id + code ISO)
const languages = db.prepare(`
  SELECT id, iso3166 FROM languages
  WHERE official = 1
`).all();

// 2️⃣ Charger tous les noms de Pokémon (par langue)
const nameData = db.prepare(`
  SELECT
    psn.pokemon_species_id,
    psn.name,
    psn.local_language_id,
    p.identifier AS slug
  FROM pokemon_species_names psn
  JOIN pokemon_species p ON psn.pokemon_species_id = p.id
`).all();

// 3️⃣ Charger tous les textes descriptifs (1er texte FR/EN par espèce)
const flavorData = db.prepare(`
  SELECT
    psf.species_id,
    psf.flavor_text,
    psf.language_id
  FROM pokemon_species_flavor_text psf
  WHERE version_id = 26 -- Exemple: Version Émeraude
`).all();

// 🗂 Indexer les données par langue
for (const lang of languages) {
    const code = lang.iso3166;
    const id = lang.id;

    const entries = {};

    // 🏷 Noms
    for (const row of nameData) {
        if (row.local_language_id !== id) continue;
        entries[`oremon.${row.slug.toLowerCase()}.name`] = row.name;
    }

    // 📖 Descriptions
    for (const row of flavorData) {
        if (row.language_id !== id) continue;
        const slug = nameData.find(n => n.pokemon_species_id === row.species_id)?.slug?.toLowerCase();
        if (!slug) continue;
        const cleaned = row.flavor_text.replace(/\s+/g, " ").replace(/"/g, '\\"').trim();
        entries[`oremon.${slug}.description`] = cleaned;
    }

    const outputPath = path.join(outputDir, `${code}.ts`);
    const content =
        `const ${code.replace(/-/g, "_")} = ${JSON.stringify(entries, null, 2)};\n\nexport default ${code.replace(/-/g, "_")};`;

    fs.writeFileSync(outputPath, content, "utf8");
    console.log(`✅ Created: ${code}.ts`);
}

console.log("\x1b[32mLocalization files generated!\x1b[0m");
