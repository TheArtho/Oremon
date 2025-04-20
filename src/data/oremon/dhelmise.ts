import { OremonData } from "../../types/OremonData";

const dhelmise: OremonData = {
  "id": "oremon:dhelmise",
  "name": "oremon.dhelmise.name",
  "description": "oremon.dhelmise.description",
  "types": [
    "ghost",
    "grass"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 131,
    "def": 100,
    "atk_spe": 86,
    "def_spe": 90,
    "spd": 40
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 25,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 25,
  "height": 3.9,
  "weight": 210,
  "baseExperience": 181,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Green",
  "model": {
    "default": "models/entity/dhelmise.geo.json"
  },
  "textures": {
    "default": "textures/entity/dhelmise.png"
  },
  "evolutions": []
};

export default dhelmise;