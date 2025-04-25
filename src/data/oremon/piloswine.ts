import { OremonData } from "../../types/OremonData";

const piloswine: OremonData = {
  "id": "oremon:piloswine",
  "name": "oremon.piloswine.name",
  "description": "oremon.piloswine.description",
  "types": [
    "ice",
    "ground"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 100,
    "def": 80,
    "atk_spe": 60,
    "def_spe": 60,
    "spd": 50
  },
  "evYield": {
    "hp": 1,
    "atk": 1,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 75,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1.1,
  "weight": 55.8,
  "baseExperience": 158,
  "growthRateId": "slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:mamoswine",
      "method": "level-up",
      "conditions": {
        "knownMove": "move:246",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "fury-attack",
      "method": "level_up",
      "level": 0
    },
    {
      "id": "fury-attack",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "take-down",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "thrash",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "roar",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mist",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "ice-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "blizzard",
      "method": "level_up",
      "level": 52
    },
    {
      "id": "blizzard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hyper-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "peck",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "earthquake",
      "method": "level_up",
      "level": 46
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
      "level": 58
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
      "id": "powder-snow",
      "method": "level_up",
      "level": 1
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
      "method": "level_up",
      "level": 1
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
      "level": 1
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
      "id": "giga-impact",
      "method": "machine",
      "level": 0
    },
    {
      "id": "ice-fang",
      "method": "level_up",
      "level": 24
    },
    {
      "id": "mud-bomb",
      "method": "level_up",
      "level": 18
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

export default piloswine;
