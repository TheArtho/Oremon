import { OremonData } from "../../types/OremonData";

const lairon: OremonData = {
  "id": "oremon:lairon",
  "name": "oremon.lairon.name",
  "description": "oremon.lairon.description",
  "types": [
    "steel",
    "rock"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 90,
    "def": 140,
    "atk_spe": 50,
    "def_spe": 50,
    "spd": 40
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 2,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 90,
  "eggGroups": [
    "monster"
  ],
  "hatchCounter": 35,
  "height": 0.9,
  "weight": 120,
  "baseExperience": 151,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:aggron",
      "method": "level-up",
      "conditions": {
        "minLevel": 42,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "headbutt",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "headbutt",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "take-down",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "double-edge",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "roar",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "roar",
      "method": "machine",
      "level": 0
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
      "id": "harden",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "rest",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-slide",
      "method": "level_up",
      "level": 25
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
      "level": 16
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
      "level": 4
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
      "id": "iron-tail",
      "method": "level_up",
      "level": 35
    },
    {
      "id": "metal-claw",
      "method": "level_up",
      "level": 10
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
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-tomb",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "metal-sound",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "iron-defense",
      "method": "level_up",
      "level": 39
    },
    {
      "id": "metal-burst",
      "method": "level_up",
      "level": 55
    },
    {
      "id": "rock-polish",
      "method": "machine",
      "level": 0
    },
    {
      "id": "shadow-claw",
      "method": "machine",
      "level": 0
    },
    {
      "id": "iron-head",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "stone-edge",
      "method": "machine",
      "level": 0
    },
    {
      "id": "autotomize",
      "method": "level_up",
      "level": 47
    },
    {
      "id": "heavy-slam",
      "method": "level_up",
      "level": 51
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bulldoze",
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

export default lairon;
