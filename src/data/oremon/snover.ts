import { OremonData } from "../../types/OremonData";

const snover: OremonData = {
  "id": "oremon:snover",
  "name": "oremon.snover.name",
  "description": "oremon.snover.description",
  "types": [
    "grass",
    "ice"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 62,
    "def": 50,
    "atk_spe": 62,
    "def_spe": 60,
    "spd": 40
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
  "catchRate": 120,
  "eggGroups": [
    "monster",
    "plant"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 50.5,
  "baseExperience": 67,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "upright",
  "color": "White",
  "evolutions": [
    {
      "into": "oremon:abomasnow",
      "method": "level-up",
      "conditions": {
        "minLevel": 40,
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
      "id": "stomp",
      "method": "egg",
      "level": 0
    },
    {
      "id": "double-edge",
      "method": "egg",
      "level": 0
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "mist",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "mist",
      "method": "egg",
      "level": 0
    },
    {
      "id": "ice-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "blizzard",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "blizzard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "leech-seed",
      "method": "egg",
      "level": 0
    },
    {
      "id": "growth",
      "method": "egg",
      "level": 0
    },
    {
      "id": "razor-leaf",
      "method": "level_up",
      "level": 5
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
      "id": "powder-snow",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "icy-wind",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "swagger",
      "method": "level_up",
      "level": 17
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
      "id": "rain-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "shadow-ball",
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
      "id": "ingrain",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "grass-whistle",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "sheer-cold",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "bullet-seed",
      "method": "egg",
      "level": 0
    },
    {
      "id": "magical-leaf",
      "method": "egg",
      "level": 0
    },
    {
      "id": "natural-gift",
      "method": "egg",
      "level": 0
    },
    {
      "id": "seed-bomb",
      "method": "egg",
      "level": 0
    },
    {
      "id": "energy-ball",
      "method": "machine",
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
      "level": 26
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wood-hammer",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "frost-breath",
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

export default snover;
