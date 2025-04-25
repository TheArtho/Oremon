import { OremonData } from "../../types/OremonData";

const marshtomp: OremonData = {
  "id": "oremon:marshtomp",
  "name": "oremon.marshtomp.name",
  "description": "oremon.marshtomp.description",
  "types": [
    "water",
    "ground"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 85,
    "def": 70,
    "atk_spe": 60,
    "def_spe": 70,
    "spd": 50
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
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "monster",
    "water1"
  ],
  "hatchCounter": 20,
  "height": 0.7,
  "weight": 28,
  "baseExperience": 142,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:swampert",
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
      "id": "take-down",
      "method": "level_up",
      "level": 42
    },
    {
      "id": "growl",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "water-gun",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "water-gun",
      "method": "level_up",
      "level": 4
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
      "id": "earthquake",
      "method": "level_up",
      "level": 48
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
      "level": 18
    },
    {
      "id": "waterfall",
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
      "level": 28
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
      "method": "level_up",
      "level": 32
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mud-slap",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "mud-slap",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "foresight",
      "method": "level_up",
      "level": 12
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
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "endeavor",
      "method": "level_up",
      "level": 52
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "muddy-water",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "mud-shot",
      "method": "level_up",
      "level": 0
    },
    {
      "id": "mud-shot",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mud-bomb",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "sludge-wave",
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
      "id": "scald",
      "method": "machine",
      "level": 0
    },
    {
      "id": "water-pledge",
      "method": "tutor",
      "level": 0
    },
    {
      "id": "bulldoze",
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

export default marshtomp;
