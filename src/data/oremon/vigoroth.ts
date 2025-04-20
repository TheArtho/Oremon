import { OremonData } from "../../types/OremonData";

const vigoroth: OremonData = {
  "id": "oremon:vigoroth",
  "name": "oremon.vigoroth.name",
  "description": "oremon.vigoroth.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 80,
    "atk": 80,
    "def": 80,
    "atk_spe": 55,
    "def_spe": 55,
    "spd": 90
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 15,
  "height": 1.4,
  "weight": 46.5,
  "baseExperience": 154,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "White",
  "model": {
    "default": "models/entity/vigoroth.geo.json"
  },
  "textures": {
    "default": "textures/entity/vigoroth.png"
  },
  "evolutions": [
    {
      "into": "oremon:slaking",
      "method": "level-up",
      "conditions": {
        "minLevel": 36,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default vigoroth;