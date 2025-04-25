import { OremonData } from "../../types/OremonData";

const pidove: OremonData = {
  "id": "oremon:pidove",
  "name": "oremon.pidove.name",
  "description": "oremon.pidove.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 55,
    "def": 50,
    "atk_spe": 36,
    "def_spe": 30,
    "spd": 43
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
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 15,
  "height": 0.3,
  "weight": 2.1,
  "baseExperience": 53,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:tranquill",
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
      "id": "razor-wind",
      "method": "level_up",
      "level": 32
    },
    {
      "id": "gust",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "fly",
      "method": "machine",
      "level": 0
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "growl",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hypnosis",
      "method": "egg",
      "level": 0
    },
    {
      "id": "quick-attack",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sky-attack",
      "method": "level_up",
      "level": 50
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
      "id": "detect",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "swagger",
      "method": "level_up",
      "level": 39
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "steel-wing",
      "method": "egg",
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
      "id": "morning-sun",
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
      "id": "uproar",
      "method": "egg",
      "level": 0
    },
    {
      "id": "facade",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "taunt",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "taunt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wish",
      "method": "egg",
      "level": 0
    },
    {
      "id": "feather-dance",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "air-cutter",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "roost",
      "method": "level_up",
      "level": 18
    },
    {
      "id": "roost",
      "method": "machine",
      "level": 0
    },
    {
      "id": "tailwind",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "u-turn",
      "method": "machine",
      "level": 0
    },
    {
      "id": "lucky-chant",
      "method": "egg",
      "level": 0
    },
    {
      "id": "night-slash",
      "method": "egg",
      "level": 0
    },
    {
      "id": "air-slash",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "echoed-voice",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bestow",
      "method": "egg",
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

export default pidove;
