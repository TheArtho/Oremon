import { OremonData } from "../../types/OremonData";

const nuzleaf: OremonData = {
  "id": "oremon:nuzleaf",
  "name": "oremon.nuzleaf.name",
  "description": "oremon.nuzleaf.description",
  "types": [
    "grass",
    "dark"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 70,
    "def": 40,
    "atk_spe": 60,
    "def_spe": 40,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "ground",
    "plant"
  ],
  "hatchCounter": 15,
  "height": 1,
  "weight": 28,
  "baseExperience": 119,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:shiftry",
      "method": "use-item",
      "conditions": {
        "item": "item:85",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "pound",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "razor-wind",
      "method": "level_up",
      "level": 20
    },
    {
      "id": "swords-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hyper-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "growth",
      "method": "level_up",
      "level": 6
    },
    {
      "id": "razor-leaf",
      "method": "level_up",
      "level": 0
    },
    {
      "id": "razor-leaf",
      "method": "level_up",
      "level": 1
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
      "id": "harden",
      "method": "level_up",
      "level": 3
    },
    {
      "id": "explosion",
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
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "feint-attack",
      "method": "level_up",
      "level": 24
    },
    {
      "id": "false-swipe",
      "method": "machine",
      "level": 0
    },
    {
      "id": "swagger",
      "method": "level_up",
      "level": 32
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
      "id": "sunny-day",
      "method": "machine",
      "level": 0
    },
    {
      "id": "psych-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "shadow-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fake-out",
      "method": "level_up",
      "level": 12
    },
    {
      "id": "torment",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "torment",
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
      "method": "level_up",
      "level": 16
    },
    {
      "id": "nature-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "extrasensory",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "leaf-blade",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "embargo",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dark-pulse",
      "method": "machine",
      "level": 0
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
      "id": "snarl",
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

export default nuzleaf;
