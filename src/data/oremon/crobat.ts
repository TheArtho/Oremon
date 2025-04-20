import { OremonData } from "../../types/OremonData";

const crobat: OremonData = {
  "id": "oremon:crobat",
  "name": "oremon.crobat.name",
  "description": "oremon.crobat.description",
  "types": [
    "poison",
    "flying"
  ],
  "baseStats": {
    "hp": 85,
    "atk": 90,
    "def": 80,
    "atk_spe": 70,
    "def_spe": 80,
    "spd": 130
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 3
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 90,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 15,
  "height": 1.8,
  "weight": 75,
  "baseExperience": 241,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "bug wings",
  "color": "Purple",
  "model": {
    "default": "models/entity/crobat.geo.json"
  },
  "textures": {
    "default": "textures/entity/crobat.png"
  },
  "evolutions": []
};

export default crobat;