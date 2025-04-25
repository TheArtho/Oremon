import { OremonData } from "../../types/OremonData";

const grubbin: OremonData = {
  "id": "oremon:grubbin",
  "name": "oremon.grubbin.name",
  "description": "oremon.grubbin.description",
  "types": [
    "bug"
  ],
  "baseStats": {
    "hp": 47,
    "atk": 62,
    "def": 45,
    "atk_spe": 55,
    "def_spe": 45,
    "spd": 46
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 15,
  "height": 0.4,
  "weight": 4.4,
  "baseExperience": 60,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:charjabug",
      "method": "level-up",
      "conditions": {
        "minLevel": 20,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "vice-grip",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "bite",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "string-shot",
      "method": "level_up",
      "level": 4
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
      "id": "dig",
      "method": "level_up",
      "level": 28
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
      "method": "egg",
      "level": 0
    },
    {
      "id": "light-screen",
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
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mud-slap",
      "method": "level_up",
      "level": 7
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
      "id": "spark",
      "method": "level_up",
      "level": 16
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
      "id": "crunch",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mud-shot",
      "method": "egg",
      "level": 0
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "x-scissor",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "x-scissor",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bug-bite",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "charge-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "acrobatics",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "acrobatics",
      "method": "machine",
      "level": 0
    },
    {
      "id": "volt-switch",
      "method": "machine",
      "level": 0
    },
    {
      "id": "electroweb",
      "method": "egg",
      "level": 0
    },
    {
      "id": "wild-charge",
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

export default grubbin;
