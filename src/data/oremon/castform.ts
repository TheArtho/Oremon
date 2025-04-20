import { OremonData } from "../../types/OremonData";

const castform: OremonData = {
  "id": "oremon:castform",
  "name": "oremon.castform.name",
  "description": "oremon.castform.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 70,
    "def": 70,
    "atk_spe": 70,
    "def_spe": 70,
    "spd": 70
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
  "catchRate": 45,
  "eggGroups": [
    "fairy",
    "indeterminate"
  ],
  "hatchCounter": 25,
  "height": 0.3,
  "weight": 0.8,
  "baseExperience": 147,
  "growthRateId": "medium",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": true,
  "shape": "ball",
  "color": "Gray",
  "model": {
    "default": "models/entity/castform.geo.json"
  },
  "textures": {
    "default": "textures/entity/castform.png"
  },
  "evolutions": []
};

export default castform;