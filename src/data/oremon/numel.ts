import { OremonData } from "../../types/OremonData";

const numel: OremonData = {
  "id": "oremon:numel",
  "name": "oremon.numel.name",
  "description": "oremon.numel.description",
  "types": [
    "fire",
    "ground"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 60,
    "def": 40,
    "atk_spe": 65,
    "def_spe": 45,
    "spd": 35
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
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.7,
  "weight": 24,
  "baseExperience": 61,
  "growthRateId": "medium",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:camerupt",
      "method": "level-up",
      "conditions": {
        "minLevel": 33,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "stomp",
      "method": "egg",
      "level": 0
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "body-slam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "take-down",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "double-edge",
      "method": "level_up",
      "level": 47
    },
    {
      "id": "growl",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "ember",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "flamethrower",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "flamethrower",
      "method": "machine",
      "level": 0
    },
    {
      "id": "growth",
      "method": "egg",
      "level": 0
    },
    {
      "id": "earthquake",
      "method": "level_up",
      "level": 40
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
      "id": "defense-curl",
      "method": "egg",
      "level": 0
    },
    {
      "id": "focus-energy",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "fire-blast",
      "method": "machine",
      "level": 0
    },
    {
      "id": "amnesia",
      "method": "level_up",
      "level": 19
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
      "id": "curse",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "scary-face",
      "method": "egg",
      "level": 0
    },
    {
      "id": "sandstorm",
      "method": "machine",
      "level": 0
    },
    {
      "id": "endure",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rollout",
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
      "id": "magnitude",
      "method": "level_up",
      "level": 12
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
      "id": "ancient-power",
      "method": "egg",
      "level": 0
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
      "id": "swallow",
      "method": "egg",
      "level": 0
    },
    {
      "id": "heat-wave",
      "method": "egg",
      "level": 0
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
      "id": "nature-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "yawn",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "yawn",
      "method": "egg",
      "level": 0
    },
    {
      "id": "overheat",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "howl",
      "method": "egg",
      "level": 0
    },
    {
      "id": "earth-power",
      "method": "level_up",
      "level": 26
    },
    {
      "id": "mud-bomb",
      "method": "egg",
      "level": 0
    },
    {
      "id": "lava-plume",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "iron-head",
      "method": "egg",
      "level": 0
    },
    {
      "id": "flame-burst",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "heavy-slam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "flame-charge",
      "method": "machine",
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
      "id": "bulldoze",
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

export default numel;
