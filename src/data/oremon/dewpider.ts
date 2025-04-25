import { OremonData } from "../../types/OremonData";

const dewpider: OremonData = {
  "id": "oremon:dewpider",
  "name": "oremon.dewpider.name",
  "description": "oremon.dewpider.description",
  "types": [
    "water",
    "bug"
  ],
  "baseStats": {
    "hp": 38,
    "atk": 40,
    "def": 52,
    "atk_spe": 40,
    "def_spe": 72,
    "spd": 27
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
  "catchRate": 200,
  "eggGroups": [
    "water1",
    "bug"
  ],
  "hatchCounter": 15,
  "height": 0.3,
  "weight": 4,
  "baseExperience": 54,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "legs",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:araquanid",
      "method": "level-up",
      "conditions": {
        "minLevel": 22,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "bite",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "surf",
      "method": "machine",
      "level": 0
    },
    {
      "id": "ice-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "blizzard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bubble-beam",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "aurora-beam",
      "method": "egg",
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
      "id": "waterfall",
      "method": "machine",
      "level": 0
    },
    {
      "id": "leech-life",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "leech-life",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bubble",
      "method": "level_up",
      "level": 1
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
      "id": "spider-web",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "protect",
      "method": "machine",
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
      "id": "crunch",
      "method": "level_up",
      "level": 32
    },
    {
      "id": "mirror-coat",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "stockpile",
      "method": "egg",
      "level": 0
    },
    {
      "id": "spit-up",
      "method": "egg",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "water-sport",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "aqua-ring",
      "method": "level_up",
      "level": 24
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "x-scissor",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bug-bite",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "power-split",
      "method": "egg",
      "level": 0
    },
    {
      "id": "entrainment",
      "method": "level_up",
      "level": 48
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "scald",
      "method": "machine",
      "level": 0
    },
    {
      "id": "frost-breath",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sticky-web",
      "method": "egg",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "infestation",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "infestation",
      "method": "machine",
      "level": 0
    },
    {
      "id": "lunge",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "liquidation",
      "method": "level_up",
      "level": 45
    }
  ]
};

export default dewpider;
