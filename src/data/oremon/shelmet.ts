import { OremonData } from "../../types/OremonData";

const shelmet: OremonData = {
  "id": "oremon:shelmet",
  "name": "oremon.shelmet.name",
  "description": "oremon.shelmet.description",
  "types": [
    "bug"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 40,
    "def": 85,
    "atk_spe": 40,
    "def_spe": 65,
    "spd": 25
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
  "catchRate": 200,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 15,
  "height": 0.4,
  "weight": 7.7,
  "baseExperience": 61,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:accelgor",
      "method": "trade",
      "conditions": {
        "tradeWith": "oremon:karrablast",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "body-slam",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "double-edge",
      "method": "egg",
      "level": 0
    },
    {
      "id": "acid",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "absorb",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "mega-drain",
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
      "id": "recover",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "bide",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "leech-life",
      "method": "machine",
      "level": 0
    },
    {
      "id": "acid-armor",
      "method": "level_up",
      "level": 32
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
      "id": "curse",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "protect",
      "method": "level_up",
      "level": 28
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
      "id": "mud-slap",
      "method": "egg",
      "level": 0
    },
    {
      "id": "spikes",
      "method": "egg",
      "level": 0
    },
    {
      "id": "giga-drain",
      "method": "level_up",
      "level": 37
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
      "id": "baton-pass",
      "method": "egg",
      "level": 0
    },
    {
      "id": "encore",
      "method": "egg",
      "level": 0
    },
    {
      "id": "pursuit",
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
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "yawn",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "feint",
      "method": "egg",
      "level": 0
    },
    {
      "id": "guard-swap",
      "method": "level_up",
      "level": 50
    },
    {
      "id": "toxic-spikes",
      "method": "egg",
      "level": 0
    },
    {
      "id": "bug-buzz",
      "method": "level_up",
      "level": 44
    },
    {
      "id": "energy-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "guard-split",
      "method": "egg",
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
      "id": "final-gambit",
      "method": "level_up",
      "level": 56
    },
    {
      "id": "struggle-bug",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "infestation",
      "method": "machine",
      "level": 0
    }
  ]
};

export default shelmet;
