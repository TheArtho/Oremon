import { OremonData } from "../../types/OremonData";

const budew: OremonData = {
  "id": "oremon:budew",
  "name": "oremon.budew.name",
  "description": "oremon.budew.description",
  "types": [
    "grass",
    "poison"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 30,
    "def": 35,
    "atk_spe": 50,
    "def_spe": 70,
    "spd": 55
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
    "no-eggs"
  ],
  "hatchCounter": 20,
  "height": 0.2,
  "weight": 1.2,
  "baseExperience": 56,
  "growthRateId": "medium-slow",
  "generationId": 4,
  "isBaby": true,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:roselia",
      "method": "level-up",
      "conditions": {
        "timeOfDay": "day",
        "minHappiness": 220,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "swords-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "pin-missile",
      "method": "egg",
      "level": 0
    },
    {
      "id": "absorb",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "mega-drain",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "growth",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "razor-leaf",
      "method": "egg",
      "level": 0
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "stun-spore",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "sleep-powder",
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
      "id": "mind-reader",
      "method": "egg",
      "level": 0
    },
    {
      "id": "cotton-spore",
      "method": "egg",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sludge-bomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "spikes",
      "method": "egg",
      "level": 0
    },
    {
      "id": "giga-drain",
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
      "id": "synthesis",
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
      "id": "psych-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "shadow-ball",
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
      "id": "grass-whistle",
      "method": "egg",
      "level": 0
    },
    {
      "id": "extrasensory",
      "method": "egg",
      "level": 0
    },
    {
      "id": "water-sport",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "natural-gift",
      "method": "egg",
      "level": 0
    },
    {
      "id": "worry-seed",
      "method": "level_up",
      "level": 16
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
      "id": "leaf-storm",
      "method": "egg",
      "level": 0
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "venoshock",
      "method": "machine",
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
    },
    {
      "id": "dazzling-gleam",
      "method": "machine",
      "level": 0
    }
  ]
};

export default budew;
