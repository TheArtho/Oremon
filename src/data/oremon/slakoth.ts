import { OremonData } from "../../types/OremonData";

const slakoth: OremonData = {
  "id": "oremon:slakoth",
  "name": "oremon.slakoth.name",
  "description": "oremon.slakoth.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 60,
    "def": 60,
    "atk_spe": 35,
    "def_spe": 35,
    "spd": 30
  },
  "evYield": {
    "hp": 1,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 15,
  "height": 0.8,
  "weight": 24,
  "baseExperience": 56,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "model": {
    "default": "models/entity/slakoth.geo.json"
  },
  "textures": {
    "default": "textures/entity/slakoth.png"
  },
  "evolutions": [
    {
      "into": "oremon:vigoroth",
      "method": "level-up",
      "conditions": {
        "minLevel": 18,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default slakoth;