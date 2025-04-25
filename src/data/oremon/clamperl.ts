import { OremonData } from "../../types/OremonData";

const clamperl: OremonData = {
  "id": "oremon:clamperl",
  "name": "oremon.clamperl.name",
  "description": "oremon.clamperl.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 35,
    "atk": 64,
    "def": 85,
    "atk_spe": 74,
    "def_spe": 55,
    "spd": 32
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
  "catchRate": 255,
  "eggGroups": [
    "water1"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 52.5,
  "baseExperience": 69,
  "growthRateId": "slow-then-very-fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:huntail",
      "method": "trade",
      "conditions": {
        "heldItem": "item:203",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    },
    {
      "into": "oremon:gorebyss",
      "method": "trade",
      "conditions": {
        "heldItem": "item:204",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "body-slam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "supersonic",
      "method": "egg",
      "level": 0
    },
    {
      "id": "water-gun",
      "method": "level_up",
      "level": 1
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
      "id": "confuse-ray",
      "method": "egg",
      "level": 0
    },
    {
      "id": "barrier",
      "method": "egg",
      "level": 0
    },
    {
      "id": "waterfall",
      "method": "machine",
      "level": 0
    },
    {
      "id": "clamp",
      "method": "level_up",
      "level": 1
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
      "id": "protect",
      "method": "machine",
      "level": 0
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
      "id": "whirlpool",
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
      "id": "refresh",
      "method": "egg",
      "level": 0
    },
    {
      "id": "mud-sport",
      "method": "egg",
      "level": 0
    },
    {
      "id": "muddy-water",
      "method": "egg",
      "level": 0
    },
    {
      "id": "iron-defense",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "water-pulse",
      "method": "egg",
      "level": 0
    },
    {
      "id": "brine",
      "method": "egg",
      "level": 0
    },
    {
      "id": "aqua-ring",
      "method": "egg",
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
      "level": 50
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default clamperl;
