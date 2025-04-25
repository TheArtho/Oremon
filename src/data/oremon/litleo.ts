import { OremonData } from "../../types/OremonData";

const litleo: OremonData = {
  "id": "oremon:litleo",
  "name": "oremon.litleo.name",
  "description": "oremon.litleo.description",
  "types": [
    "fire",
    "normal"
  ],
  "baseStats": {
    "hp": 62,
    "atk": 50,
    "def": 58,
    "atk_spe": 73,
    "def_spe": 54,
    "spd": 72
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
  "genderRate": 7,
  "catchRate": 220,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 13.5,
  "baseExperience": 74,
  "growthRateId": "medium-slow",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:pyroar",
      "method": "level-up",
      "conditions": {
        "minLevel": 35,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "headbutt",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "take-down",
      "method": "level_up",
      "level": 20
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "roar",
      "method": "machine",
      "level": 0
    },
    {
      "id": "ember",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "flamethrower",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "flamethrower",
      "method": "machine",
      "level": 0
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fire-spin",
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
      "id": "sunny-day",
      "method": "machine",
      "level": 0
    },
    {
      "id": "crunch",
      "method": "level_up",
      "level": 39
    },
    {
      "id": "will-o-wisp",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "taunt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "yawn",
      "method": "egg",
      "level": 0
    },
    {
      "id": "endeavor",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "snatch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "hyper-voice",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "overheat",
      "method": "level_up",
      "level": 50
    },
    {
      "id": "overheat",
      "method": "machine",
      "level": 0
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "flare-blitz",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dark-pulse",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fire-fang",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "flame-charge",
      "method": "machine",
      "level": 0
    },
    {
      "id": "entrainment",
      "method": "egg",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "echoed-voice",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "echoed-voice",
      "method": "machine",
      "level": 0
    },
    {
      "id": "incinerate",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "bulldoze",
      "method": "machine",
      "level": 0
    },
    {
      "id": "work-up",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "work-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wild-charge",
      "method": "machine",
      "level": 0
    },
    {
      "id": "snarl",
      "method": "machine",
      "level": 0
    },
    {
      "id": "noble-roar",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default litleo;
