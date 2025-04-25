import { OremonData } from "../../types/OremonData";

const quilava: OremonData = {
  "id": "oremon:quilava",
  "name": "oremon.quilava.name",
  "description": "oremon.quilava.description",
  "types": [
    "fire"
  ],
  "baseStats": {
    "hp": 58,
    "atk": 64,
    "def": 58,
    "atk_spe": 80,
    "def_spe": 65,
    "spd": 80
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.9,
  "weight": 19,
  "baseExperience": 142,
  "growthRateId": "medium-slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:typhlosion",
      "method": "level-up",
      "conditions": {
        "minLevel": 36,
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
      "id": "double-edge",
      "method": "level_up",
      "level": 64
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
      "level": 10
    },
    {
      "id": "flamethrower",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "flamethrower",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "quick-attack",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "smokescreen",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "smokescreen",
      "method": "level_up",
      "level": 6
    },
    {
      "id": "defense-curl",
      "method": "level_up",
      "level": 24
    },
    {
      "id": "fire-blast",
      "method": "machine",
      "level": 0
    },
    {
      "id": "swift",
      "method": "level_up",
      "level": 31
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
      "id": "flame-wheel",
      "method": "level_up",
      "level": 20
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rollout",
      "method": "level_up",
      "level": 57
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
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "eruption",
      "method": "level_up",
      "level": 75
    },
    {
      "id": "overheat",
      "method": "machine",
      "level": 0
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "lava-plume",
      "method": "level_up",
      "level": 42
    },
    {
      "id": "flame-charge",
      "method": "level_up",
      "level": 35
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
      "id": "inferno",
      "method": "level_up",
      "level": 53
    },
    {
      "id": "fire-pledge",
      "method": "tutor",
      "level": 0
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
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "burn-up",
      "method": "level_up",
      "level": 68
    }
  ]
};

export default quilava;
