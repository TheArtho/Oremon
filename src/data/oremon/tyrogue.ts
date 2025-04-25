import { OremonData } from "../../types/OremonData";

const tyrogue: OremonData = {
  "id": "oremon:tyrogue",
  "name": "oremon.tyrogue.name",
  "description": "oremon.tyrogue.description",
  "types": [
    "fighting"
  ],
  "baseStats": {
    "hp": 35,
    "atk": 35,
    "def": 35,
    "atk_spe": 35,
    "def_spe": 35,
    "spd": 35
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
  "catchRate": 75,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 25,
  "height": 0.7,
  "weight": 21,
  "baseExperience": 42,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": true,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Purple",
  "evolutions": [
    {
      "into": "oremon:hitmonlee",
      "method": "level-up",
      "conditions": {
        "minLevel": 20,
        "physicalStat": 1,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    },
    {
      "into": "oremon:hitmonchan",
      "method": "level-up",
      "conditions": {
        "minLevel": 20,
        "physicalStat": -1,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    },
    {
      "into": "oremon:hitmontop",
      "method": "level-up",
      "conditions": {
        "minLevel": 20,
        "physicalStat": 0,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "counter",
      "method": "egg",
      "level": 0
    },
    {
      "id": "earthquake",
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
      "id": "high-jump-kick",
      "method": "egg",
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
      "id": "substitute",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thief",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mind-reader",
      "method": "egg",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mach-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "foresight",
      "method": "level_up",
      "level": 1
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
      "id": "pursuit",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rapid-spin",
      "method": "egg",
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
      "id": "fake-out",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "helping-hand",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "helping-hand",
      "method": "egg",
      "level": 0
    },
    {
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bulk-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "feint",
      "method": "egg",
      "level": 0
    },
    {
      "id": "vacuum-wave",
      "method": "egg",
      "level": 0
    },
    {
      "id": "bullet-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "low-sweep",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bulldoze",
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

export default tyrogue;
