import { OremonData } from "../../types/OremonData";

const vanillite: OremonData = {
  "id": "oremon:vanillite",
  "name": "oremon.vanillite.name",
  "description": "oremon.vanillite.description",
  "types": [
    "ice"
  ],
  "baseStats": {
    "hp": 36,
    "atk": 50,
    "def": 50,
    "atk_spe": 65,
    "def_spe": 60,
    "spd": 44
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 5.7,
  "baseExperience": 61,
  "growthRateId": "slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "White",
  "evolutions": [
    {
      "into": "oremon:vanillish",
      "method": "level-up",
      "conditions": {
        "minLevel": 35,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "mist",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "ice-beam",
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
      "level": 49
    },
    {
      "id": "blizzard",
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
      "level": 4
    },
    {
      "id": "light-screen",
      "method": "machine",
      "level": 0
    },
    {
      "id": "acid-armor",
      "method": "level_up",
      "level": 31
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
      "id": "substitute",
      "method": "machine",
      "level": 0
    },
    {
      "id": "powder-snow",
      "method": "egg",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "icy-wind",
      "method": "level_up",
      "level": 13
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
      "id": "mirror-coat",
      "method": "level_up",
      "level": 44
    },
    {
      "id": "uproar",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "hail",
      "method": "level_up",
      "level": 40
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
      "id": "taunt",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "taunt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "imprison",
      "method": "egg",
      "level": 0
    },
    {
      "id": "astonish",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "sheer-cold",
      "method": "level_up",
      "level": 53
    },
    {
      "id": "icicle-spear",
      "method": "level_up",
      "level": 1
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
      "id": "natural-gift",
      "method": "egg",
      "level": 0
    },
    {
      "id": "magnet-rise",
      "method": "egg",
      "level": 0
    },
    {
      "id": "avalanche",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "ice-shard",
      "method": "egg",
      "level": 0
    },
    {
      "id": "mirror-shot",
      "method": "level_up",
      "level": 26
    },
    {
      "id": "flash-cannon",
      "method": "machine",
      "level": 0
    },
    {
      "id": "autotomize",
      "method": "egg",
      "level": 0
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

export default vanillite;
