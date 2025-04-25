import { OremonData } from "../../types/OremonData";

const mudbray: OremonData = {
  "id": "oremon:mudbray",
  "name": "oremon.mudbray.name",
  "description": "oremon.mudbray.description",
  "types": [
    "ground"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 100,
    "def": 70,
    "atk_spe": 45,
    "def_spe": 55,
    "spd": 45
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
  "catchRate": 190,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 110,
  "baseExperience": 77,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:mudsdale",
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
      "id": "stomp",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "double-kick",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "mega-kick",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "body-slam",
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
      "id": "counter",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "earthquake",
      "method": "level_up",
      "level": 38
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
      "id": "bide",
      "method": "level_up",
      "level": 22
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
      "id": "mud-slap",
      "method": "level_up",
      "level": 1
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
      "id": "magnitude",
      "method": "egg",
      "level": 0
    },
    {
      "id": "hidden-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "superpower",
      "method": "level_up",
      "level": 45
    },
    {
      "id": "mud-sport",
      "method": "level_up",
      "level": 3
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "iron-defense",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "close-combat",
      "method": "egg",
      "level": 0
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mud-bomb",
      "method": "egg",
      "level": 0
    },
    {
      "id": "heavy-slam",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "low-sweep",
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
      "method": "level_up",
      "level": 10
    },
    {
      "id": "bulldoze",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rototiller",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "high-horsepower",
      "method": "level_up",
      "level": 24
    }
  ]
};

export default mudbray;
