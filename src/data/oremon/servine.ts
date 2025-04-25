import { OremonData } from "../../types/OremonData";

const servine: OremonData = {
  "id": "oremon:servine",
  "name": "oremon.servine.name",
  "description": "oremon.servine.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 60,
    "def": 75,
    "atk_spe": 60,
    "def_spe": 75,
    "spd": 83
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
    "ground",
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.8,
  "weight": 16,
  "baseExperience": 145,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:serperior",
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
      "id": "swords-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "slam",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "vine-whip",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "vine-whip",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "wrap",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "wrap",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "mega-drain",
      "method": "level_up",
      "level": 24
    },
    {
      "id": "leech-seed",
      "method": "level_up",
      "level": 20
    },
    {
      "id": "growth",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "solar-beam",
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
      "id": "reflect",
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
      "id": "giga-drain",
      "method": "level_up",
      "level": 40
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
      "id": "safeguard",
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
      "id": "torment",
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
      "id": "taunt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "calm-mind",
      "method": "machine",
      "level": 0
    },
    {
      "id": "leaf-blade",
      "method": "level_up",
      "level": 32
    },
    {
      "id": "wring-out",
      "method": "level_up",
      "level": 44
    },
    {
      "id": "gastro-acid",
      "method": "level_up",
      "level": 48
    },
    {
      "id": "energy-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "leaf-storm",
      "method": "level_up",
      "level": 52
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "coil",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "grass-pledge",
      "method": "tutor",
      "level": 0
    },
    {
      "id": "work-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "leaf-tornado",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default servine;
