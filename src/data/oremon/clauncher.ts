import { OremonData } from "../../types/OremonData";

const clauncher: OremonData = {
  "id": "oremon:clauncher",
  "name": "oremon.clauncher.name",
  "description": "oremon.clauncher.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 53,
    "def": 62,
    "atk_spe": 58,
    "def_spe": 63,
    "spd": 44
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
  "catchRate": 225,
  "eggGroups": [
    "water1",
    "water3"
  ],
  "hatchCounter": 15,
  "height": 0.5,
  "weight": 8.3,
  "baseExperience": 66,
  "growthRateId": "slow",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:clawitzer",
      "method": "level-up",
      "conditions": {
        "minLevel": 37,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "vice-grip",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "swords-dance",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "swords-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "water-gun",
      "method": "level_up",
      "level": 1
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
      "id": "bubble-beam",
      "method": "level_up",
      "level": 20
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
      "id": "waterfall",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bubble",
      "method": "level_up",
      "level": 12
    },
    {
      "id": "splash",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "crabhammer",
      "method": "level_up",
      "level": 30
    },
    {
      "id": "crabhammer",
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
      "id": "flail",
      "method": "level_up",
      "level": 16
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
      "id": "endure",
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
      "id": "helping-hand",
      "method": "egg",
      "level": 0
    },
    {
      "id": "muddy-water",
      "method": "level_up",
      "level": 48
    },
    {
      "id": "water-sport",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "water-pulse",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "u-turn",
      "method": "machine",
      "level": 0
    },
    {
      "id": "flash-cannon",
      "method": "machine",
      "level": 0
    },
    {
      "id": "aqua-jet",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "aqua-jet",
      "method": "egg",
      "level": 0
    },
    {
      "id": "venoshock",
      "method": "machine",
      "level": 0
    },
    {
      "id": "smack-down",
      "method": "level_up",
      "level": 39
    },
    {
      "id": "smack-down",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sludge-wave",
      "method": "machine",
      "level": 0
    },
    {
      "id": "entrainment",
      "method": "egg",
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
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default clauncher;
