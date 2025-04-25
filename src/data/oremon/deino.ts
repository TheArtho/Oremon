import { OremonData } from "../../types/OremonData";

const deino: OremonData = {
  "id": "oremon:deino",
  "name": "oremon.deino.name",
  "description": "oremon.deino.description",
  "types": [
    "dark",
    "dragon"
  ],
  "baseStats": {
    "hp": 52,
    "atk": 65,
    "def": 50,
    "atk_spe": 45,
    "def_spe": 50,
    "spd": 38
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
  "catchRate": 45,
  "eggGroups": [
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 0.8,
  "weight": 17.3,
  "baseExperience": 60,
  "growthRateId": "slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:zweilous",
      "method": "level-up",
      "conditions": {
        "minLevel": 50,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "slam",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "headbutt",
      "method": "level_up",
      "level": 12
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "body-slam",
      "method": "level_up",
      "level": 48
    },
    {
      "id": "bite",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "roar",
      "method": "level_up",
      "level": 20
    },
    {
      "id": "roar",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dragon-rage",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "thunder-wave",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
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
      "id": "focus-energy",
      "method": "level_up",
      "level": 4
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
      "id": "scary-face",
      "method": "level_up",
      "level": 50
    },
    {
      "id": "outrage",
      "method": "level_up",
      "level": 62
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
      "id": "dragon-breath",
      "method": "level_up",
      "level": 17
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
      "level": 25
    },
    {
      "id": "psych-up",
      "method": "machine",
      "level": 0
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
      "id": "taunt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hyper-voice",
      "method": "level_up",
      "level": 58
    },
    {
      "id": "astonish",
      "method": "egg",
      "level": 0
    },
    {
      "id": "assurance",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dark-pulse",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dark-pulse",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dragon-pulse",
      "method": "level_up",
      "level": 32
    },
    {
      "id": "dragon-rush",
      "method": "level_up",
      "level": 42
    },
    {
      "id": "earth-power",
      "method": "egg",
      "level": 0
    },
    {
      "id": "thunder-fang",
      "method": "egg",
      "level": 0
    },
    {
      "id": "ice-fang",
      "method": "egg",
      "level": 0
    },
    {
      "id": "fire-fang",
      "method": "egg",
      "level": 0
    },
    {
      "id": "draco-meteor",
      "method": "tutor",
      "level": 0
    },
    {
      "id": "head-smash",
      "method": "egg",
      "level": 0
    },
    {
      "id": "double-hit",
      "method": "egg",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dragon-tail",
      "method": "machine",
      "level": 0
    },
    {
      "id": "work-up",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "work-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "belch",
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

export default deino;
