import { OremonData } from "../../types/OremonData";

const machop: OremonData = {
  "id": "oremon:machop",
  "name": "oremon.machop.name",
  "description": "oremon.machop.description",
  "types": [
    "fighting"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 80,
    "def": 50,
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
  "genderRate": 2,
  "catchRate": 180,
  "eggGroups": [
    "humanshape"
  ],
  "hatchCounter": 20,
  "height": 0.8,
  "weight": 19.5,
  "baseExperience": 61,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:machoke",
      "method": "level-up",
      "conditions": {
        "minLevel": 28,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "karate-chop",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "fire-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "ice-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "thunder-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rolling-kick",
      "method": "egg",
      "level": 0
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "flamethrower",
      "method": "machine",
      "level": 0
    },
    {
      "id": "submission",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "low-kick",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "counter",
      "method": "egg",
      "level": 0
    },
    {
      "id": "seismic-toss",
      "method": "level_up",
      "level": 15
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
      "id": "meditate",
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
      "id": "focus-energy",
      "method": "level_up",
      "level": 3
    },
    {
      "id": "fire-blast",
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
      "id": "scary-face",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "foresight",
      "method": "level_up",
      "level": 9
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
      "level": 45
    },
    {
      "id": "encore",
      "method": "egg",
      "level": 0
    },
    {
      "id": "vital-throw",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "hidden-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "cross-chop",
      "method": "level_up",
      "level": 39
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
      "id": "smelling-salts",
      "method": "egg",
      "level": 0
    },
    {
      "id": "revenge",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "knock-off",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "knock-off",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "tickle",
      "method": "egg",
      "level": 0
    },
    {
      "id": "bulk-up",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "bulk-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wake-up-slap",
      "method": "level_up",
      "level": 27
    },
    {
      "id": "close-combat",
      "method": "egg",
      "level": 0
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
      "id": "power-trick",
      "method": "egg",
      "level": 0
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "focus-blast",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bullet-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "smack-down",
      "method": "machine",
      "level": 0
    },
    {
      "id": "heavy-slam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "low-sweep",
      "method": "level_up",
      "level": 13
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
      "id": "quick-guard",
      "method": "egg",
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
      "id": "dual-chop",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default machop;
