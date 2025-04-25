import { OremonData } from "../../types/OremonData";

const gible: OremonData = {
  "id": "oremon:gible",
  "name": "oremon.gible.name",
  "description": "oremon.gible.description",
  "types": [
    "dragon",
    "ground"
  ],
  "baseStats": {
    "hp": 58,
    "atk": 70,
    "def": 45,
    "atk_spe": 40,
    "def_spe": 45,
    "spd": 42
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
    "monster",
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 0.7,
  "weight": 20.5,
  "baseExperience": 60,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:gabite",
      "method": "level-up",
      "conditions": {
        "minLevel": 24,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "sand-attack",
      "method": "level_up",
      "level": 3
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "body-slam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "take-down",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "thrash",
      "method": "egg",
      "level": 0
    },
    {
      "id": "double-edge",
      "method": "egg",
      "level": 0
    },
    {
      "id": "roar",
      "method": "machine",
      "level": 0
    },
    {
      "id": "flamethrower",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dragon-rage",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "earthquake",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dig",
      "method": "level_up",
      "level": 31
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
      "id": "slash",
      "method": "level_up",
      "level": 25
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
      "method": "egg",
      "level": 0
    },
    {
      "id": "outrage",
      "method": "egg",
      "level": 0
    },
    {
      "id": "sandstorm",
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
      "id": "dragon-breath",
      "method": "egg",
      "level": 0
    },
    {
      "id": "iron-tail",
      "method": "egg",
      "level": 0
    },
    {
      "id": "metal-claw",
      "method": "egg",
      "level": 0
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
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sand-tomb",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "sand-tomb",
      "method": "egg",
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
      "level": 27
    },
    {
      "id": "dragon-claw",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mud-shot",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dragon-rush",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "shadow-claw",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-climb",
      "method": "egg",
      "level": 0
    },
    {
      "id": "draco-meteor",
      "method": "tutor",
      "level": 0
    },
    {
      "id": "iron-head",
      "method": "egg",
      "level": 0
    },
    {
      "id": "stone-edge",
      "method": "machine",
      "level": 0
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

export default gible;
