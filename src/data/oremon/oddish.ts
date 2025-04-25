import { OremonData } from "../../types/OremonData";

const oddish: OremonData = {
  "id": "oremon:oddish",
  "name": "oremon.oddish.name",
  "description": "oremon.oddish.description",
  "types": [
    "grass",
    "poison"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 50,
    "def": 55,
    "atk_spe": 75,
    "def_spe": 65,
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
  "catchRate": 255,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 5.4,
  "baseExperience": 64,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "legs",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:gloom",
      "method": "level-up",
      "conditions": {
        "minLevel": 21,
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
      "id": "acid",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "absorb",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "mega-drain",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "growth",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "razor-leaf",
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
      "method": "level_up",
      "level": 13
    },
    {
      "id": "stun-spore",
      "method": "level_up",
      "level": 14
    },
    {
      "id": "sleep-powder",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "petal-dance",
      "method": "level_up",
      "level": 51
    },
    {
      "id": "toxic",
      "method": "level_up",
      "level": 35
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
      "id": "flail",
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
      "level": 31
    },
    {
      "id": "charm",
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
      "id": "sweet-scent",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "synthesis",
      "method": "egg",
      "level": 0
    },
    {
      "id": "moonlight",
      "method": "level_up",
      "level": 27
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
      "id": "ingrain",
      "method": "egg",
      "level": 0
    },
    {
      "id": "secret-power",
      "method": "egg",
      "level": 0
    },
    {
      "id": "teeter-dance",
      "method": "egg",
      "level": 0
    },
    {
      "id": "tickle",
      "method": "egg",
      "level": 0
    },
    {
      "id": "natural-gift",
      "method": "level_up",
      "level": 39
    },
    {
      "id": "lucky-chant",
      "method": "level_up",
      "level": 23
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
      "id": "venoshock",
      "method": "machine",
      "level": 0
    },
    {
      "id": "after-you",
      "method": "egg",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "grassy-terrain",
      "method": "level_up",
      "level": 47
    },
    {
      "id": "moonblast",
      "method": "level_up",
      "level": 43
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
      "id": "infestation",
      "method": "machine",
      "level": 0
    },
    {
      "id": "strength-sap",
      "method": "egg",
      "level": 0
    }
  ]
};

export default oddish;
