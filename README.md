# Oremon – Minecraft Bedrock Addon (Gen 1–7)

**Oremon** is an open-source Minecraft Bedrock Behavior Pack written in **TypeScript**, bringing a modular Pokémon-inspired experience to Bedrock Edition. It aims to include full data support for all official Pokémon from **Generation 1 to Generation 8**.

> Inspired by the Pokémon franchise and powered by the latest Bedrock Scripting API (`@minecraft/server 2.0.0-beta`).

---

## Current Features

- Includes every Pokémon data from Gen 1 to Gen 7 (800+)
- TypeScript-based scripting for safe, maintainable code
- NodeJS environment for automated compilation and deployment
- Clean and type-safe `OremonData` interface structure
- i18n support with multiple language files (names, descriptions, etc.)
- Autogenerated data using **veekun's Pokémon database** in SQLite + scripts

---

## Project Structure

```
packs/
├── Behaviour           # Behavior Pack
├── Resource            # Resource Pack
scripts/                # Code generation utilities
src/
├── core/               # Game logic, systems, registries
├── data/oremon/        # Individual Pokémon files (autogenerated)
├── enums/              # TypeScript enums (types, abilities, etc.)
├── i18n/               # Localization files (us, fr, etc.)
├── types/              # Base TypeScript interfaces (OremonData, etc.)
└── main.ts             # Addon entry point
```

---

## Getting Started

1. Clone this repository

2. Install dependencies:

```bash
npm install
```

3. Build the addon:

```bash
npm run build:clean
```

4. Activate it in your world settings in Minecraft Bedrock Edition

---

## Contributing

Contributions are welcome! If you’d like to:

- Add more mechanics (moves, battles, capturing, etc.)
- Improve typings or organization
- Report issues or suggest features

...feel free to open a pull request or GitHub issue!

---

## License

This project is licensed under the **MIT License** for all original code and assets created specifically for Oremon.

> However, some assets used in this project are licensed under separate terms. See below.

---

## Attributions

This project makes use of **3D models from the Cobblemon project**, which are included under the terms of the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)** license.

You can view the original Cobblemon assets and license at:  
🔗 [https://gitlab.com/cable-mc/cobblemon-assets/-/tree/master](https://gitlab.com/cable-mc/cobblemon-assets/-/tree/master)

In accordance with the license:

- All Cobblemon models remain © their original creators.
- These assets are **used non-commercially** and **with attribution**.
- Any modifications made to these models are indicated in the resource pack.
- This project does **not monetize** or offer paid distribution of Cobblemon models.

Attribution:  
> "3D Pokémon models used in this addon are adapted from the [Cobblemon project](https://cobblemon.com), licensed under CC BY-NC 4.0 by CableMC and contributors. These assets have been modified for use in the Minecraft Bedrock platform."

---

## Disclaimer

This project is a **fan-made mod** and is **not affiliated with Nintendo, Game Freak, or The Pokémon Company**. All trademarks, logos, and names belong to their respective owners.

---

## 🔮 Roadmap

- [ ] Implementing Moves Data
- [ ] Pokéball capture mechanics
- [ ] Item mechanics
- [ ] Turn-based battle systems (Classic and Legends Arceus battle system)
- [ ] Real-time battle system (Legends Z-A battle system)
- [ ] Generation 8-9 and custom Oremon support

