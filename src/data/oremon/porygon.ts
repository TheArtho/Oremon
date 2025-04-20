import { OremonData } from "../../types/OremonData";

const porygon: OremonData = {
  "id": "oremon:porygon",
  "name": "oremon.porygon.name",
  "description": "oremon.porygon.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 60,
    "def": 70,
    "atk_spe": 85,
    "def_spe": 75,
    "spd": 40
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
  "genderRate": -1,
  "catchRate": 45,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 0.8,
  "weight": 36.5,
  "baseExperience": 79,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "legs",
  "color": "Pink",
  "model": {
    "default": "models/entity/porygon.geo.json"
  },
  "textures": {
    "default": "textures/entity/porygon.png"
  },
  "evolutions": [
    {
      "into": "oremon:porygon2",
      "method": "trade",
      "conditions": {
        "heldItem": "item:229",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default porygon;