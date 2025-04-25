import { OremonData } from "../../types/OremonData";

const yungoos: OremonData = {
  "id": "oremon:yungoos",
  "name": "oremon.yungoos.name",
  "description": "oremon.yungoos.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 48,
    "atk": 70,
    "def": 30,
    "atk_spe": 30,
    "def_spe": 30,
    "spd": 45
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
    "ground"
  ],
  "hatchCounter": 15,
  "height": 0.4,
  "weight": 6,
  "baseExperience": 51,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:gumshoos",
      "method": "level-up",
      "conditions": {
        "minLevel": 20,
        "timeOfDay": "day",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "sand-attack",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "take-down",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "thrash",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 3
    },
    {
      "id": "bite",
      "method": "level_up",
      "level": 19
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
      "id": "bide",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "rest",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "rest",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hyper-fang",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "super-fang",
      "method": "level_up",
      "level": 25
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
      "level": 31
    },
    {
      "id": "mud-slap",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "sandstorm",
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
      "id": "pursuit",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "hidden-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "crunch",
      "method": "level_up",
      "level": 34
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
      "id": "revenge",
      "method": "egg",
      "level": 0
    },
    {
      "id": "yawn",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "odor-sleuth",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "u-turn",
      "method": "machine",
      "level": 0
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "last-resort",
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

export default yungoos;
