import { OremonData } from "../../types/OremonData";

const gliscor: OremonData = {
  "id": "oremon:gliscor",
  "name": "oremon.gliscor.name",
  "description": "oremon.gliscor.description",
  "types": [
    "ground",
    "flying"
  ],
  "baseStats": {
    "hp": 75,
    "atk": 95,
    "def": 125,
    "atk_spe": 45,
    "def_spe": 75,
    "spd": 95
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 2,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 30,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 20,
  "height": 2,
  "weight": 42.5,
  "baseExperience": 179,
  "growthRateId": "medium-slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Purple",
  "model": {
    "default": "models/entity/gliscor.geo.json"
  },
  "textures": {
    "default": "textures/entity/gliscor.png"
  },
  "evolutions": []
};

export default gliscor;