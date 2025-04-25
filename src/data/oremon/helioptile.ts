import { OremonData } from "../../types/OremonData";

const helioptile: OremonData = {
  "id": "oremon:helioptile",
  "name": "oremon.helioptile.name",
  "description": "oremon.helioptile.description",
  "types": [
    "electric",
    "normal"
  ],
  "baseStats": {
    "hp": 44,
    "atk": 38,
    "def": 33,
    "atk_spe": 61,
    "def_spe": 43,
    "spd": 70
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
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "monster",
    "dragon"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 6,
  "baseExperience": 58,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:heliolisk",
      "method": "use-item",
      "conditions": {
        "item": "item:80",
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
      "id": "razor-wind",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "tail-whip",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "surf",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder-shock",
      "method": "level_up",
      "level": 6
    },
    {
      "id": "thunderbolt",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "thunderbolt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder-wave",
      "method": "level_up",
      "level": 31
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
      "id": "agility",
      "method": "egg",
      "level": 0
    },
    {
      "id": "quick-attack",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "light-screen",
      "method": "machine",
      "level": 0
    },
    {
      "id": "glare",
      "method": "egg",
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
      "id": "mud-slap",
      "method": "level_up",
      "level": 13
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
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "charge",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "camouflage",
      "method": "egg",
      "level": 0
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
      "id": "charge-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "low-sweep",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "volt-switch",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "volt-switch",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bulldoze",
      "method": "level_up",
      "level": 35
    },
    {
      "id": "bulldoze",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dragon-tail",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wild-charge",
      "method": "machine",
      "level": 0
    },
    {
      "id": "parabolic-charge",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "electrify",
      "method": "level_up",
      "level": 45
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "electric-terrain",
      "method": "egg",
      "level": 0
    }
  ]
};

export default helioptile;
