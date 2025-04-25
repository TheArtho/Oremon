import { OremonData } from "../../types/OremonData";

const rufflet: OremonData = {
  "id": "oremon:rufflet",
  "name": "oremon.rufflet.name",
  "description": "oremon.rufflet.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 83,
    "def": 50,
    "atk_spe": 37,
    "def_spe": 50,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 0,
  "catchRate": 190,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 10.5,
  "baseExperience": 70,
  "growthRateId": "slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "White",
  "evolutions": [
    {
      "into": "oremon:braviary",
      "method": "level-up",
      "conditions": {
        "minLevel": 54,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "wing-attack",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "whirlwind",
      "method": "level_up",
      "level": 55
    },
    {
      "id": "fly",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fury-attack",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "thrash",
      "method": "level_up",
      "level": 64
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "peck",
      "method": "level_up",
      "level": 1
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
      "id": "rock-slide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "slash",
      "method": "level_up",
      "level": 28
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
      "id": "scary-face",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "steel-wing",
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
      "id": "hidden-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rain-dance",
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
      "id": "crush-claw",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "aerial-ace",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bulk-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "roost",
      "method": "machine",
      "level": 0
    },
    {
      "id": "tailwind",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "u-turn",
      "method": "machine",
      "level": 0
    },
    {
      "id": "air-slash",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "brave-bird",
      "method": "level_up",
      "level": 59
    },
    {
      "id": "shadow-claw",
      "method": "machine",
      "level": 0
    },
    {
      "id": "defog",
      "method": "level_up",
      "level": 32
    },
    {
      "id": "hone-claws",
      "method": "level_up",
      "level": 14
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sky-drop",
      "method": "level_up",
      "level": 50
    },
    {
      "id": "sky-drop",
      "method": "machine",
      "level": 0
    },
    {
      "id": "work-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default rufflet;
