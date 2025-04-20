import { OremonData } from "../../types/OremonData";

const politoed: OremonData = {
  "id": "oremon:politoed",
  "name": "oremon.politoed.name",
  "description": "oremon.politoed.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 90,
    "atk": 75,
    "def": 75,
    "atk_spe": 90,
    "def_spe": 100,
    "spd": 70
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 3,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "water1"
  ],
  "hatchCounter": 20,
  "height": 1.1,
  "weight": 33.9,
  "baseExperience": 225,
  "growthRateId": "medium-slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Green",
  "model": {
    "default": "models/entity/politoed.geo.json"
  },
  "textures": {
    "default": "textures/entity/politoed.png"
  },
  "evolutions": []
};

export default politoed;