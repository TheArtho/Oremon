import { OremonData } from "../../types/OremonData";

const bagon: OremonData = {
  "id": "oremon:bagon",
  "name": "oremon.bagon.name",
  "description": "oremon.bagon.description",
  "types": [
    "dragon"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 75,
    "def": 60,
    "atk_spe": 40,
    "def_spe": 30,
    "spd": 50
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
  "catchRate": 45,
  "eggGroups": [
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 0.6,
  "weight": 42.1,
  "baseExperience": 60,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:shelgon",
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
      "id": "headbutt",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "thrash",
      "method": "egg",
      "level": 0
    },
    {
      "id": "double-edge",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "bite",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "roar",
      "method": "machine",
      "level": 0
    },
    {
      "id": "ember",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "flamethrower",
      "method": "level_up",
      "level": 44
    },
    {
      "id": "flamethrower",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hydro-pump",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dragon-rage",
      "method": "egg",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rage",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "defense-curl",
      "method": "egg",
      "level": 0
    },
    {
      "id": "focus-energy",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "fire-blast",
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
      "id": "scary-face",
      "method": "level_up",
      "level": 39
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
      "id": "dragon-breath",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "hidden-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "twister",
      "method": "egg",
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
      "id": "crunch",
      "method": "level_up",
      "level": 25
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
      "id": "dragon-claw",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "dragon-claw",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dragon-dance",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dragon-pulse",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dragon-rush",
      "method": "egg",
      "level": 0
    },
    {
      "id": "shadow-claw",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fire-fang",
      "method": "egg",
      "level": 0
    },
    {
      "id": "zen-headbutt",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "draco-meteor",
      "method": "tutor",
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
    }
  ]
};

export default bagon;
