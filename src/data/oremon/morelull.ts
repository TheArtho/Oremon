import { OremonData } from "../../types/OremonData";

const morelull: OremonData = {
  "id": "oremon:morelull",
  "name": "oremon.morelull.name",
  "description": "oremon.morelull.description",
  "types": [
    "grass",
    "fairy"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 35,
    "def": 55,
    "atk_spe": 65,
    "def_spe": 75,
    "spd": 15
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.2,
  "weight": 1.5,
  "baseExperience": 57,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Purple",
  "evolutions": [
    {
      "into": "oremon:shiinotic",
      "method": "level-up",
      "conditions": {
        "minLevel": 24,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "absorb",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "mega-drain",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "leech-seed",
      "method": "egg",
      "level": 0
    },
    {
      "id": "growth",
      "method": "egg",
      "level": 0
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "poison-powder",
      "method": "egg",
      "level": 0
    },
    {
      "id": "stun-spore",
      "method": "egg",
      "level": 0
    },
    {
      "id": "sleep-powder",
      "method": "level_up",
      "level": 18
    },
    {
      "id": "thunder-wave",
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
      "id": "confuse-ray",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "light-screen",
      "method": "machine",
      "level": 0
    },
    {
      "id": "amnesia",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dream-eater",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "dream-eater",
      "method": "machine",
      "level": 0
    },
    {
      "id": "spore",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "flash",
      "method": "level_up",
      "level": 8
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
      "level": 29
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
      "id": "moonlight",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "hidden-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sunny-day",
      "method": "machine",
      "level": 0
    },
    {
      "id": "nature-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "ingrain",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "astonish",
      "method": "level_up",
      "level": 4
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
      "id": "moonblast",
      "method": "level_up",
      "level": 39
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dazzling-gleam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "strength-sap",
      "method": "level_up",
      "level": 32
    },
    {
      "id": "spotlight",
      "method": "level_up",
      "level": 46
    }
  ]
};

export default morelull;
