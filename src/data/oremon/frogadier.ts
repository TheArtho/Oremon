import { OremonData } from "../../types/OremonData";

const frogadier: OremonData = {
  "id": "oremon:frogadier",
  "name": "oremon.frogadier.name",
  "description": "oremon.frogadier.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 54,
    "atk": 63,
    "def": 52,
    "atk_spe": 83,
    "def_spe": 56,
    "spd": 97
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "water1"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 10.9,
  "baseExperience": 142,
  "growthRateId": "medium-slow",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:greninja",
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
      "id": "pound",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "growl",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "hydro-pump",
      "method": "level_up",
      "level": 56
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
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "quick-attack",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "double-team",
      "method": "level_up",
      "level": 50
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "smokescreen",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "lick",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "waterfall",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bubble",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "bubble",
      "method": "level_up",
      "level": 5
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
      "method": "level_up",
      "level": 40
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
      "id": "rain-dance",
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
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bounce",
      "method": "level_up",
      "level": 45
    },
    {
      "id": "water-pulse",
      "method": "level_up",
      "level": 14
    },
    {
      "id": "u-turn",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fling",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dark-pulse",
      "method": "machine",
      "level": 0
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "smack-down",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "smack-down",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "level_up",
      "level": 23
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
      "id": "scald",
      "method": "machine",
      "level": 0
    },
    {
      "id": "acrobatics",
      "method": "machine",
      "level": 0
    },
    {
      "id": "water-pledge",
      "method": "tutor",
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

export default frogadier;
