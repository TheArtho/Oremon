import { OremonData } from "../../types/OremonData";

const zweilous: OremonData = {
  "id": "oremon:zweilous",
  "name": "oremon.zweilous.name",
  "description": "oremon.zweilous.description",
  "types": [
    "dark",
    "dragon"
  ],
  "baseStats": {
    "hp": 72,
    "atk": 85,
    "def": 70,
    "atk_spe": 65,
    "def_spe": 70,
    "spd": 58
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
  "catchRate": 45,
  "eggGroups": [
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 1.4,
  "weight": 50,
  "baseExperience": 147,
  "growthRateId": "slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:hydreigon",
      "method": "level-up",
      "conditions": {
        "minLevel": 64,
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
      "id": "body-slam",
      "method": "level_up",
      "level": 48
    },
    {
      "id": "bite",
      "method": "level_up",
      "level": 1
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
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "focus-energy",
      "method": "level_up",
      "level": 1
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
      "level": 55
    },
    {
      "id": "outrage",
      "method": "level_up",
      "level": 71
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
      "level": 64
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
      "id": "draco-meteor",
      "method": "tutor",
      "level": 0
    },
    {
      "id": "double-hit",
      "method": "level_up",
      "level": 1
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
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default zweilous;
