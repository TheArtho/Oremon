import { OremonData } from "../../types/OremonData";

const staryu: OremonData = {
  "id": "oremon:staryu",
  "name": "oremon.staryu.name",
  "description": "oremon.staryu.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 30,
    "atk": 45,
    "def": 55,
    "atk_spe": 70,
    "def_spe": 55,
    "spd": 85
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 225,
  "eggGroups": [
    "water3"
  ],
  "hatchCounter": 20,
  "height": 0.8,
  "weight": 34.5,
  "baseExperience": 68,
  "growthRateId": "slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:starmie",
      "method": "use-item",
      "conditions": {
        "item": "item:84",
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
      "id": "water-gun",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "hydro-pump",
      "method": "level_up",
      "level": 53
    },
    {
      "id": "surf",
      "method": "machine",
      "level": 0
    },
    {
      "id": "ice-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "blizzard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bubble-beam",
      "method": "level_up",
      "level": 18
    },
    {
      "id": "thunderbolt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder-wave",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "psychic",
      "method": "level_up",
      "level": 42
    },
    {
      "id": "psychic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "recover",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "harden",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "minimize",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "confuse-ray",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "light-screen",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "light-screen",
      "method": "machine",
      "level": 0
    },
    {
      "id": "reflect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "waterfall",
      "method": "machine",
      "level": 0
    },
    {
      "id": "swift",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "psywave",
      "method": "level_up",
      "level": 13
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
      "id": "swagger",
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
      "id": "rapid-spin",
      "method": "level_up",
      "level": 7
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
      "id": "psych-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hail",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "camouflage",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "cosmic-power",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "gyro-ball",
      "method": "level_up",
      "level": 24
    },
    {
      "id": "gyro-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "brine",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "power-gem",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "flash-cannon",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "scald",
      "method": "machine",
      "level": 0
    },
    {
      "id": "reflect-type",
      "method": "level_up",
      "level": 35
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dazzling-gleam",
      "method": "machine",
      "level": 0
    }
  ]
};

export default staryu;
