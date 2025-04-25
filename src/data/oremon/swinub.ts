import { OremonData } from "../../types/OremonData";

const swinub: OremonData = {
  "id": "oremon:swinub",
  "name": "oremon.swinub.name",
  "description": "oremon.swinub.description",
  "types": [
    "ice",
    "ground"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 50,
    "def": 40,
    "atk_spe": 30,
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
  "catchRate": 225,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 6.5,
  "baseExperience": 50,
  "growthRateId": "slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:piloswine",
      "method": "level-up",
      "conditions": {
        "minLevel": 33,
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
      "id": "body-slam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "take-down",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "take-down",
      "method": "egg",
      "level": 0
    },
    {
      "id": "double-edge",
      "method": "egg",
      "level": 0
    },
    {
      "id": "bite",
      "method": "egg",
      "level": 0
    },
    {
      "id": "roar",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mist",
      "method": "level_up",
      "level": 35
    },
    {
      "id": "ice-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "blizzard",
      "method": "level_up",
      "level": 44
    },
    {
      "id": "blizzard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "earthquake",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "earthquake",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fissure",
      "method": "egg",
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
      "id": "amnesia",
      "method": "level_up",
      "level": 48
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
      "id": "curse",
      "method": "egg",
      "level": 0
    },
    {
      "id": "flail",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "powder-snow",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mud-slap",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "icy-wind",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "sandstorm",
      "method": "machine",
      "level": 0
    },
    {
      "id": "endure",
      "method": "level_up",
      "level": 14
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
      "id": "ancient-power",
      "method": "egg",
      "level": 0
    },
    {
      "id": "hail",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mud-sport",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "odor-sleuth",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "icicle-spear",
      "method": "egg",
      "level": 0
    },
    {
      "id": "mud-shot",
      "method": "egg",
      "level": 0
    },
    {
      "id": "avalanche",
      "method": "egg",
      "level": 0
    },
    {
      "id": "ice-shard",
      "method": "level_up",
      "level": 24
    },
    {
      "id": "mud-bomb",
      "method": "level_up",
      "level": 18
    },
    {
      "id": "stealth-rock",
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
      "id": "icicle-crash",
      "method": "egg",
      "level": 0
    },
    {
      "id": "freeze-dry",
      "method": "egg",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default swinub;
