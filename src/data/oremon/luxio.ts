import { OremonData } from "../../types/OremonData";

const luxio: OremonData = {
  "id": "oremon:luxio",
  "name": "oremon.luxio.name",
  "description": "oremon.luxio.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 85,
    "def": 49,
    "atk_spe": 60,
    "def_spe": 49,
    "spd": 60
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
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.9,
  "weight": 30.5,
  "baseExperience": 127,
  "growthRateId": "medium-slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:luxray",
      "method": "level-up",
      "conditions": {
        "minLevel": 30,
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
      "id": "leer",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "bite",
      "method": "level_up",
      "level": 18
    },
    {
      "id": "roar",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "roar",
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
      "id": "scary-face",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "swagger",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "spark",
      "method": "level_up",
      "level": 13
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
      "level": 38
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "charge",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "thunder-fang",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "discharge",
      "method": "level_up",
      "level": 48
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
      "id": "volt-switch",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wild-charge",
      "method": "level_up",
      "level": 53
    },
    {
      "id": "wild-charge",
      "method": "machine",
      "level": 0
    },
    {
      "id": "snarl",
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

export default luxio;
