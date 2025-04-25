const fs = require("fs-extra");
const path = require("path");

// Liste des mobs à bloquer
const mobs = [
    "allay", "axolotl", "bat", "bee", "blaze", "camel", "cat", "cave_spider", "chicken", "cod",
    "cow", "creeper", "dolphin", "donkey", "drowned", "elder_guardian", "ender_dragon", "enderman",
    "endermite", "evoker", "fox", "frog", "ghast", "giant", "glow_squid", "goat", "guardian", "hoglin",
    "horse", "husk", "illusioner", "iron_golem", "llama", "magma_cube", "mooshroom", "mule", "ocelot",
    "panda", "parrot", "phantom", "pig", "piglin", "piglin_brute", "pillager", "polar_bear", "pufferfish",
    "rabbit", "ravager", "salmon", "sheep", "shulker", "silverfish", "sniffer", "skeleton", "skeleton_horse",
    "slime", "snow_golem", "spider", "squid", "stray", "strider", "tadpole", "trader_llama", "tropical_fish",
    "turtle", "vex", "villager", "vindicator", "wandering_trader", "warden", "witch", "wither",
    "wither_skeleton", "wolf", "zoglin", "zombie", "zombie_horse", "zombie_villager", "zombified_piglin"
];

// Dossier de sortie
const outputDir = path.join(__dirname, "../spawn_rules");

async function generateSpawnRule(mob) {
    const identifier = `minecraft:${mob}`;
    const population_control = `animal`;
    const data = {
        format_version: "1.8.0",
        "minecraft:spawn_rules": {
            description: {
                identifier
            },
            conditions: [
                {
                    "minecraft:weight": {
                        default: 0
                    }
                }
            ]
        }
    };

    const filePath = path.join(outputDir, `${mob}.json`);
    await fs.outputJson(filePath, data, { spaces: 2 });
    console.log(`[✔] Fichier généré pour ${identifier}`);
}

async function run() {
    console.log("📁 Génération des fichiers spawn_rules...");
    await fs.ensureDir(outputDir);

    for (const mob of mobs) {
        await generateSpawnRule(mob);
    }

    console.log("\n✅ Tous les fichiers ont été générés dans:", outputDir);
}

run().catch(err => {
    console.error("❌ Erreur pendant la génération :", err);
});
