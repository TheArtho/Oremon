import { OremonData } from "../../types/OremonData";

const bonsly: OremonData = {
  "id": "oremon:bonsly",
  "name": "oremon.bonsly.name",
  "description": "oremon.bonsly.description",
  "types": [
    "rock"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 80,
    "def": 95,
    "atk_spe": 10,
    "def_spe": 45,
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
    "no-eggs"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 15,
  "baseExperience": 58,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": true,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "legs",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:sudowoodo",
      "method": "level-up",
      "conditions": {
        "knownMove": "move:102",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "headbutt",
      "method": "egg",
      "level": 0
    },
    {
      "id": "double-edge",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "low-kick",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "counter",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "rock-throw",
      "method": "level_up",
      "level": 12
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mimic",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "harden",
      "method": "egg",
      "level": 0
    },
    {
      "id": "defense-curl",
      "method": "egg",
      "level": 0
    },
    {
      "id": "self-destruct",
      "method": "egg",
      "level": 0
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
      "method": "level_up",
      "level": 33
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
      "id": "thief",
      "method": "machine",
      "level": 0
    },
    {
      "id": "curse",
      "method": "egg",
      "level": 0
    },
    {
      "id": "flail",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "feint-attack",
      "method": "level_up",
      "level": 19
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
      "id": "psych-up",
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
      "id": "fake-tears",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "rock-tomb",
      "method": "level_up",
      "level": 26
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sand-tomb",
      "method": "egg",
      "level": 0
    },
    {
      "id": "block",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "calm-mind",
      "method": "machine",
      "level": 0
    },
    {
      "id": "copycat",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "sucker-punch",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "rock-polish",
      "method": "machine",
      "level": 0
    },
    {
      "id": "stealth-rock",
      "method": "egg",
      "level": 0
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
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "tearful-look",
      "method": "level_up",
      "level": 22
    }
  ]
};

export default bonsly;
