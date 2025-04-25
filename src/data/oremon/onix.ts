import { OremonData } from "../../types/OremonData";

const onix: OremonData = {
  "id": "oremon:onix",
  "name": "oremon.onix.name",
  "description": "oremon.onix.description",
  "types": [
    "rock",
    "ground"
  ],
  "baseStats": {
    "hp": 35,
    "atk": 45,
    "def": 160,
    "atk_spe": 30,
    "def_spe": 45,
    "spd": 70
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
  "catchRate": 45,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 25,
  "height": 8.8,
  "weight": 210,
  "baseExperience": 77,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:steelix",
      "method": "trade",
      "conditions": {
        "heldItem": "item:210",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "bind",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "slam",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "double-edge",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "roar",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-throw",
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
      "level": 43
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rage",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "screech",
      "method": "level_up",
      "level": 31
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
      "id": "defense-curl",
      "method": "egg",
      "level": 0
    },
    {
      "id": "explosion",
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
      "level": 34
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
      "id": "curse",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "flail",
      "method": "egg",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sandstorm",
      "method": "level_up",
      "level": 52
    },
    {
      "id": "sandstorm",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rollout",
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
      "level": 25
    },
    {
      "id": "iron-tail",
      "method": "level_up",
      "level": 40
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
      "id": "psych-up",
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
      "id": "mud-sport",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "rock-tomb",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sand-tomb",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "block",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rock-blast",
      "method": "egg",
      "level": 0
    },
    {
      "id": "gyro-ball",
      "method": "level_up",
      "level": 20
    },
    {
      "id": "gyro-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-polish",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "rock-polish",
      "method": "machine",
      "level": 0
    },
    {
      "id": "flash-cannon",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-climb",
      "method": "egg",
      "level": 0
    },
    {
      "id": "stone-edge",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "stone-edge",
      "method": "machine",
      "level": 0
    },
    {
      "id": "stealth-rock",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "stealth-rock",
      "method": "egg",
      "level": 0
    },
    {
      "id": "wide-guard",
      "method": "egg",
      "level": 0
    },
    {
      "id": "smack-down",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "smack-down",
      "method": "machine",
      "level": 0
    },
    {
      "id": "heavy-slam",
      "method": "egg",
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
      "id": "dragon-tail",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rototiller",
      "method": "egg",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "brutal-swing",
      "method": "machine",
      "level": 0
    }
  ]
};

export default onix;
