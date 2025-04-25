import { OremonData } from "../../types/OremonData";

const sewaddle: OremonData = {
  "id": "oremon:sewaddle",
  "name": "oremon.sewaddle.name",
  "description": "oremon.sewaddle.description",
  "types": [
    "bug",
    "grass"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 53,
    "def": 70,
    "atk_spe": 40,
    "def_spe": 60,
    "spd": 42
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 15,
  "height": 0.3,
  "weight": 2.5,
  "baseExperience": 62,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:swadloon",
      "method": "level-up",
      "conditions": {
        "minLevel": 20,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "razor-wind",
      "method": "egg",
      "level": 0
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "razor-leaf",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "string-shot",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "agility",
      "method": "egg",
      "level": 0
    },
    {
      "id": "screech",
      "method": "egg",
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
      "id": "dream-eater",
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
      "id": "mind-reader",
      "method": "egg",
      "level": 0
    },
    {
      "id": "flail",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "endure",
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
      "id": "baton-pass",
      "method": "egg",
      "level": 0
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
      "method": "machine",
      "level": 0
    },
    {
      "id": "camouflage",
      "method": "egg",
      "level": 0
    },
    {
      "id": "silver-wind",
      "method": "egg",
      "level": 0
    },
    {
      "id": "calm-mind",
      "method": "machine",
      "level": 0
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "me-first",
      "method": "egg",
      "level": 0
    },
    {
      "id": "air-slash",
      "method": "egg",
      "level": 0
    },
    {
      "id": "bug-buzz",
      "method": "level_up",
      "level": 36
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
      "id": "bug-bite",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "struggle-bug",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "sticky-web",
      "method": "level_up",
      "level": 31
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

export default sewaddle;
