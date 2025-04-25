import { OremonData } from "../../types/OremonData";

const sunkern: OremonData = {
  "id": "oremon:sunkern",
  "name": "oremon.sunkern.name",
  "description": "oremon.sunkern.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 30,
    "atk": 30,
    "def": 30,
    "atk_spe": 30,
    "def_spe": 30,
    "spd": 30
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 235,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.3,
  "weight": 1.8,
  "baseExperience": 36,
  "growthRateId": "medium-slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:sunflora",
      "method": "use-item",
      "conditions": {
        "item": "item:80",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "swords-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "double-edge",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "absorb",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "mega-drain",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "leech-seed",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "leech-seed",
      "method": "egg",
      "level": 0
    },
    {
      "id": "growth",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "razor-leaf",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "solar-beam",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "light-screen",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bide",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rest",
      "method": "machine",
      "level": 0
    },
    {
      "id": "substitute",
      "method": "machine",
      "level": 0
    },
    {
      "id": "curse",
      "method": "egg",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sludge-bomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "giga-drain",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "endure",
      "method": "egg",
      "level": 0
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "attract",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sleep-talk",
      "method": "machine",
      "level": 0
    },
    {
      "id": "return",
      "method": "machine",
      "level": 0
    },
    {
      "id": "frustration",
      "method": "machine",
      "level": 0
    },
    {
      "id": "safeguard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "encore",
      "method": "egg",
      "level": 0
    },
    {
      "id": "sweet-scent",
      "method": "egg",
      "level": 0
    },
    {
      "id": "morning-sun",
      "method": "egg",
      "level": 0
    },
    {
      "id": "synthesis",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "hidden-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sunny-day",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "sunny-day",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "nature-power",
      "method": "egg",
      "level": 0
    },
    {
      "id": "nature-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "helping-hand",
      "method": "egg",
      "level": 0
    },
    {
      "id": "ingrain",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "ingrain",
      "method": "egg",
      "level": 0
    },
    {
      "id": "endeavor",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "grass-whistle",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "grass-whistle",
      "method": "egg",
      "level": 0
    },
    {
      "id": "natural-gift",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "natural-gift",
      "method": "egg",
      "level": 0
    },
    {
      "id": "worry-seed",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "seed-bomb",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "energy-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "grassy-terrain",
      "method": "egg",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default sunkern;
