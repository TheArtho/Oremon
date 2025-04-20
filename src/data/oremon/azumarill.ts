import { OremonData } from "../../types/OremonData";

const azumarill: OremonData = {
  "id": "oremon:azumarill",
  "name": "oremon.azumarill.name",
  "description": "oremon.azumarill.description",
  "types": [
    "water",
    "fairy"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 50,
    "def": 80,
    "atk_spe": 60,
    "def_spe": 80,
    "spd": 50
  },
  "evYield": {
    "hp": 3,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 75,
  "eggGroups": [
    "water1",
    "fairy"
  ],
  "hatchCounter": 10,
  "height": 0.8,
  "weight": 28.5,
  "baseExperience": 189,
  "growthRateId": "fast",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Blue",
  "model": {
    "default": "models/entity/azumarill.geo.json"
  },
  "textures": {
    "default": "textures/entity/azumarill.png"
  },
  "evolutions": []
};

export default azumarill;