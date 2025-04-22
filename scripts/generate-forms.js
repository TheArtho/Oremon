const fs = require("fs-extra");
const path = require("path");
const Database = require("better-sqlite3");

const db = new Database(path.join(__dirname, "../db/veekun-pokedex.sqlite"));
const outputDir = path.join(__dirname, "../src/data/forms");

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Map species_id to identifier
const speciesIdToSlug = Object.fromEntries(
    db.prepare("SELECT id, identifier FROM pokemon_species").all()
        .map(row => [row.id, row.identifier.toLowerCase()])
);

// Read forms from database
const formDataRaw = db.prepare(`
  SELECT 
    pokemon_forms.id,
    pokemon_forms.identifier,
    pokemon_forms.form_identifier,
    pokemon_forms.is_default,
    pokemon_forms.is_battle_only,
    pokemon_forms.is_mega,
    pokemon_forms.form_order,
    pokemon.identifier AS pokemon_identifier,
    pokemon.species_id
  FROM pokemon_forms
  LEFT JOIN pokemon ON pokemon_forms.pokemon_id = pokemon.id
  ORDER BY pokemon.species_id, pokemon_forms.form_order ASC
`).all();

// Group forms by species
const formsBySpecies = {};

for (const form of formDataRaw) {
    const slug = speciesIdToSlug[form.species_id];
    if (!slug) continue;

    if (!formsBySpecies[slug]) formsBySpecies[slug] = [];

    const isDefault = form.is_default === 1 || form.is_default === true;

    formsBySpecies[slug].push({
        id: `form:${form.identifier.toLowerCase()}`,
        form_identifier: form.form_identifier ? `oremon.form.${form.form_identifier}.name` : undefined, // fallback to base if null
        pokemon_identifier: `oremon:${form.pokemon_identifier.toLowerCase()}`,
        isDefault,
        isBattleOnly: form.is_battle_only === 1 ? true : undefined,
        isMega: form.is_mega === 1 ? true : undefined,
        formOrder: form.form_order
    });
}

// Write .ts files only for species that have forms
for (const [slug, forms] of Object.entries(formsBySpecies)) {
    if (forms.length <= 1) continue; // Skip if there's only the default forms

    const outPath = path.join(outputDir, `${slug}.ts`);
    const fileContent = `import { FormData } from "../../types/OremonData";

const ${slug.replace(/-/g, "_")}Forms: FormData[] = ${JSON.stringify(forms, null, 2)};

export default ${slug.replace(/-/g, "_")}Forms;
`;

    fs.writeFileSync(outPath, fileContent, "utf8");
    console.log(`Generated forms for ${slug}`);
}

console.log("\x1b[32mAll FormData files generated!\x1b[0m");
