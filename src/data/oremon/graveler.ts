import { OremonData } from "../../types/OremonData";

const graveler: OremonData = {
  "id": "oremon:graveler",
  "name": "oremon.graveler.name",
  "description": "oremon.graveler.description",
  "types": [
    "rock",
    "ground"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 95,
    "def": 115,
    "atk_spe": 45,
    "def_spe": 45,
    "spd": 35
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 2,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 15,
  "height": 1,
  "weight": 105,
  "baseExperience": 137,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:golem",
      "method": "trade",
      "conditions": {
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
      "level": 50
    },
    {
      "id": "flamethrower",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-throw",
      "method": "level_up",
      "level": 16
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
      "method": "level_up",
      "level": 1
    },
    {
      "id": "self-destruct",
      "method": "level_up",
      "level": 24
    },
    {
      "id": "fire-blast",
      "method": "machine",
      "level": 0
    },
    {
      "id": "explosion",
      "method": "level_up",
      "level": 44
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
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sandstorm",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rollout",
      "method": "level_up",
      "level": 10
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
      "id": "mud-sport",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "mud-sport",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-blast",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "gyro-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-polish",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "rock-polish",
      "method": "level_up",
      "level": 6
    },
    {
      "id": "rock-polish",
      "method": "machine",
      "level": 0
    },
    {
      "id": "stone-edge",
      "method": "level_up",
      "level": 54
    },
    {
      "id": "stone-edge",
      "method": "machine",
      "level": 0
    },
    {
      "id": "stealth-rock",
      "method": "level_up",
      "level": 30
    },
    {
      "id": "smack-down",
      "method": "level_up",
      "level": 18
    },
    {
      "id": "smack-down",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bulldoze",
      "method": "level_up",
      "level": 22
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

export default graveler;
