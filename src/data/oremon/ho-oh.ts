import { OremonData } from "../../types/OremonData";

const ho_oh: OremonData = {
  "id": "oremon:ho-oh",
  "name": "oremon.ho-oh.name",
  "description": "oremon.ho-oh.description",
  "types": [
    "fire",
    "flying"
  ],
  "baseStats": {
    "hp": 106,
    "atk": 130,
    "def": 90,
    "atk_spe": 110,
    "def_spe": 154,
    "spd": 90
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
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 3.8,
  "weight": 199,
  "baseExperience": 306,
  "growthRateId": "slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Red",
  "model": {
    "default": "models/entity/ho-oh.geo.json"
  },
  "textures": {
    "default": "textures/entity/ho-oh.png"
  },
  "evolutions": []
};

export default ho_oh;