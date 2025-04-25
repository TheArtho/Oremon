import { OremonData } from "../../types/OremonData";

const timburr: OremonData = {
  "id": "oremon:timburr",
  "name": "oremon.timburr.name",
  "description": "oremon.timburr.description",
  "types": [
    "fighting"
  ],
  "baseStats": {
    "hp": 75,
    "atk": 80,
    "def": 55,
    "atk_spe": 25,
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
  "genderRate": 2,
  "catchRate": 180,
  "eggGroups": [
    "humanshape"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 12.5,
  "baseExperience": 61,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:gurdurr",
      "method": "level-up",
      "conditions": {
        "minLevel": 25,
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
      "id": "comet-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "low-kick",
      "method": "level_up",
      "level": 12
    },
    {
      "id": "counter",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rock-throw",
      "method": "level_up",
      "level": 16
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
      "id": "focus-energy",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "bide",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "rest",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-slide",
      "method": "level_up",
      "level": 31
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
      "id": "reversal",
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
      "id": "scary-face",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "foresight",
      "method": "egg",
      "level": 0
    },
    {
      "id": "detect",
      "method": "egg",
      "level": 0
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
      "id": "dynamic-punch",
      "method": "level_up",
      "level": 34
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
      "id": "focus-punch",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "smelling-salts",
      "method": "egg",
      "level": 0
    },
    {
      "id": "taunt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "superpower",
      "method": "level_up",
      "level": 49
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
      "id": "bulk-up",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "bulk-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wake-up-slap",
      "method": "level_up",
      "level": 20
    },
    {
      "id": "hammer-arm",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "force-palm",
      "method": "egg",
      "level": 0
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "drain-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "focus-blast",
      "method": "machine",
      "level": 0
    },
    {
      "id": "stone-edge",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "stone-edge",
      "method": "machine",
      "level": 0
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wide-guard",
      "method": "egg",
      "level": 0
    },
    {
      "id": "smack-down",
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
      "id": "chip-away",
      "method": "level_up",
      "level": 24
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
    },
    {
      "id": "power-up-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "brutal-swing",
      "method": "machine",
      "level": 0
    }
  ]
};

export default timburr;
