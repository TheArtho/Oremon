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
  "model": {
    "default": "models/entity/clamperl.geo.json"
  },
  "textures": {
    "default": "textures/entity/clamperl.png"
  },
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
  ]
};

export default clamperl;