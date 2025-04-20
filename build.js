const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");
const config = require("./buildconfig.json");

const modName = config.name || "MyMod";

const behaviorPack = path.join(__dirname, "packs", "Behaviour");
const resourcePack = path.join(__dirname, "packs", "Resource");
const uiSourceDir = path.join(__dirname, "ui");
const uiTargetDir = path.join(resourcePack, "ui");

const mcDir = path.join(
    process.env.LOCALAPPDATA,
    "Packages",
    "Microsoft.MinecraftUWP_8wekyb3d8bbwe",
    "LocalState",
    "games",
    "com.mojang"
);

const targetBP = path.join(mcDir, "development_behavior_packs", `${modName} BP`);
const targetRP = path.join(mcDir, "development_resource_packs", `${modName} RP`);

let serverBP = null;
let serverRP = null;

const privateConfigPath = path.join(__dirname, "private_config.json");
const privateConfigExists = fs.existsSync(privateConfigPath);
if (privateConfigExists) {
    const privateConfig = require(privateConfigPath);
    const serverPath = privateConfig.server_path;
    serverBP = path.join(serverPath, "development_behavior_packs", `${modName} BP`);
    serverRP = path.join(serverPath, "development_resource_packs", `${modName} RP`);
}

const shouldClean = process.argv.includes("--clean");

async function cleanAndCopy(src, dest, name) {
    if (shouldClean) {
        console.log(`[Clean] Removing directory: ${dest}`);
        await fs.emptyDir(dest);
    }

    console.log(`[Build] Copying ${name} to ${dest}...`);
    await fs.ensureDir(dest);
    await fs.copy(src, dest, { overwrite: true });
    console.log(`[Build] ${name} copied successfully.`);
}

async function compileJsoncToJson(srcDir, destDir) {
    const stripJsonComments = (await import("strip-json-comments")).default;

    const entries = await fs.readdir(srcDir);
    await fs.ensureDir(destDir);

    for (const entry of entries) {
        const srcPath = path.join(srcDir, entry);
        const destPath = path.join(destDir, entry.replace(/\.jsonc$/, ".json"));
        const stat = await fs.stat(srcPath);

        if (stat.isDirectory()) {
            await compileJsoncToJson(srcPath, path.join(destDir, entry));
        } else if (entry.endsWith(".jsonc")) {
            const raw = await fs.readFile(srcPath, "utf-8");
            const json = stripJsonComments(raw);
            await fs.writeFile(destPath, json, "utf-8");
        } else {
            await fs.copy(srcPath, path.join(destDir, entry));
        }
    }
}

(async () => {
    try {
        if (shouldClean) {
            const outDir = path.join(__dirname, "packs", "Behaviour", "scripts");
            console.log("[Clean] Clearing compiled TypeScript output...");
            await fs.emptyDir(outDir);
        }

        console.log("[Compiler] Compiling TypeScript...");
        execSync("npx tsc", { stdio: "inherit" });
        console.log("[Compiler] TypeScript compilation completed.");

        console.log("[UI] Converting .jsonc files...");
        await compileJsoncToJson(uiSourceDir, uiTargetDir);

        console.log("[Minecraft Client] Copying packs...");
        await cleanAndCopy(behaviorPack, targetBP, "Behavior Pack (client)");
        await cleanAndCopy(resourcePack, targetRP, "Resource Pack (client)");

        if (privateConfigExists) {
            console.log("[Server] Copying packs to dedicated server...");
            await cleanAndCopy(behaviorPack, serverBP, "Behavior Pack (server)");
            await cleanAndCopy(resourcePack, serverRP, "Resource Pack (server)");
        } else {
            console.warn("⚠️  private_config.json not found. Skipping server deployment.");
        }

        console.log("\x1b[32mBuild completed successfully.\x1b[0m");
    } catch (err) {
        console.error("Error during build process:", err);
    }
})();
