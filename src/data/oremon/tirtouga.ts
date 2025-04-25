import { OremonData } from "../../types/OremonData";

const tirtouga: OremonData = {
  "id": "oremon:tirtouga",
  "name": "oremon.tirtouga.name",
  "description": "oremon.tirtouga.description",
  "types": [
    "water",
    "rock"
  ],
  "baseStats": {
    "hp": 54,
    "atk": 78,
    "def": 103,
    "atk_spe": 53,
    "def_spe": 45,
    "spd": 22
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
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "water1",
    "water3"
  ],
  "hatchCounter": 30,
  "height": 0.7,
  "weight": 16.5,
  "baseExperience": 71,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:carracosta",
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
      "id": "slam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "body-slam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "bite",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "water-gun",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "hydro-pump",
      "method": "level_up",
      "level": 50
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
      "id": "blizzard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-throw",
      "method": "egg",
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
      "id": "withdraw",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "bide",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "bide",
      "method": "egg",
      "level": 0
    },
    {
      "id": "waterfall",
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
      "level": 45
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
      "level": 35
    },
    {
      "id": "flail",
      "method": "egg",
      "level": 0
    },
    {
      "id": "protect",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sandstorm",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rollout",
      "method": "level_up",
      "level": 5
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
      "method": "level_up",
      "level": 48
    },
    {
      "id": "rain-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "crunch",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "ancient-power",
      "method": "level_up",
      "level": 18
    },
    {
      "id": "whirlpool",
      "method": "egg",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "knock-off",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "iron-defense",
      "method": "egg",
      "level": 0
    },
    {
      "id": "water-pulse",
      "method": "egg",
      "level": 0
    },
    {
      "id": "brine",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "guard-swap",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rock-polish",
      "method": "machine",
      "level": 0
    },
    {
      "id": "aqua-tail",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "stone-edge",
      "method": "machine",
      "level": 0
    },
    {
      "id": "aqua-jet",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "wide-guard",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "smack-down",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "smack-down",
      "method": "machine",
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
      "id": "shell-smash",
      "method": "level_up",
      "level": 38
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
    },
    {
      "id": "liquidation",
      "method": "egg",
      "level": 0
    }
  ]
};

export default tirtouga;
