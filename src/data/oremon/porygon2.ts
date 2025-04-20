import { OremonData } from "../../types/OremonData";

const porygon2: OremonData = {
  "id": "oremon:porygon2",
  "name": "oremon.porygon2.name",
  "description": "oremon.porygon2.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 85,
    "atk": 80,
    "def": 90,
    "atk_spe": 105,
    "def_spe": 95,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 2,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 45,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 32.5,
  "baseExperience": 180,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "legs",
  "color": "Red",
  "model": {
    "default": "models/entity/porygon2.geo.json"
  },
  "textures": {
    "default": "textures/entity/porygon2.png"
  },
  "evolutions": [
    {
      "into": "oremon:porygon-z",
      "method": "trade",
      "conditions": {
        "heldItem": "item:301",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default porygon2;