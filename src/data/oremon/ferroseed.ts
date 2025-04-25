import { OremonData } from "../../types/OremonData";

const ferroseed: OremonData = {
  "id": "oremon:ferroseed",
  "name": "oremon.ferroseed.name",
  "description": "oremon.ferroseed.description",
  "types": [
    "grass",
    "steel"
  ],
  "baseStats": {
    "hp": 44,
    "atk": 50,
    "def": 91,
    "atk_spe": 24,
    "def_spe": 86,
    "spd": 10
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "plant",
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 18.8,
  "baseExperience": 61,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:ferrothorn",
      "method": "level-up",
      "conditions": {
        "minLevel": 40,
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
      "id": "pin-missile",
      "method": "level_up",
      "level": 18
    },
    {
      "id": "leech-seed",
      "method": "egg",
      "level": 0
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
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
      "id": "harden",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "self-destruct",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "explosion",
      "method": "level_up",
      "level": 55
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
      "id": "substitute",
      "method": "machine",
      "level": 0
    },
    {
      "id": "curse",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "spikes",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rollout",
      "method": "level_up",
      "level": 6
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
      "id": "metal-claw",
      "method": "level_up",
      "level": 14
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
      "id": "ingrain",
      "method": "level_up",
      "level": 35
    },
    {
      "id": "bullet-seed",
      "method": "egg",
      "level": 0
    },
    {
      "id": "iron-defense",
      "method": "level_up",
      "level": 26
    },
    {
      "id": "gravity",
      "method": "egg",
      "level": 0
    },
    {
      "id": "gyro-ball",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "gyro-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "payback",
      "method": "level_up",
      "level": 47
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "worry-seed",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rock-polish",
      "method": "machine",
      "level": 0
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "seed-bomb",
      "method": "egg",
      "level": 0
    },
    {
      "id": "energy-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mirror-shot",
      "method": "level_up",
      "level": 30
    },
    {
      "id": "flash-cannon",
      "method": "level_up",
      "level": 52
    },
    {
      "id": "flash-cannon",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-climb",
      "method": "egg",
      "level": 0
    },
    {
      "id": "iron-head",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "stealth-rock",
      "method": "egg",
      "level": 0
    },
    {
      "id": "acid-spray",
      "method": "egg",
      "level": 0
    },
    {
      "id": "round",
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

export default ferroseed;
