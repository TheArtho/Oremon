import { OremonData } from "../../types/OremonData";

const goldeen: OremonData = {
  "id": "oremon:goldeen",
  "name": "oremon.goldeen.name",
  "description": "oremon.goldeen.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 67,
    "def": 60,
    "atk_spe": 35,
    "def_spe": 50,
    "spd": 63
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
    "water2"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 15,
  "baseExperience": 64,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "fish",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:seaking",
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
      "id": "horn-attack",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "fury-attack",
      "method": "level_up",
      "level": 24
    },
    {
      "id": "horn-drill",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "body-slam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "tail-whip",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "supersonic",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "hydro-pump",
      "method": "egg",
      "level": 0
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
      "id": "psybeam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "peck",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "agility",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "haze",
      "method": "egg",
      "level": 0
    },
    {
      "id": "waterfall",
      "method": "level_up",
      "level": 32
    },
    {
      "id": "waterfall",
      "method": "machine",
      "level": 0
    },
    {
      "id": "skull-bash",
      "method": "egg",
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
      "id": "flail",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mud-slap",
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
      "method": "egg",
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
      "id": "megahorn",
      "method": "level_up",
      "level": 45
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
      "method": "egg",
      "level": 0
    },
    {
      "id": "signal-beam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "mud-shot",
      "method": "egg",
      "level": 0
    },
    {
      "id": "water-sport",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "water-pulse",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "aqua-ring",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "aqua-tail",
      "method": "egg",
      "level": 0
    },
    {
      "id": "soak",
      "method": "level_up",
      "level": 40
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
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "smart-strike",
      "method": "machine",
      "level": 0
    }
  ]
};

export default goldeen;
