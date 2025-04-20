import { OremonData } from "../../types/OremonData";

const sableye: OremonData = {
  "id": "oremon:sableye",
  "name": "oremon.sableye.name",
  "description": "oremon.sableye.description",
  "types": [
    "dark",
    "ghost"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 75,
    "def": 75,
    "atk_spe": 65,
    "def_spe": 65,
    "spd": 50
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "humanshape"
  ],
  "hatchCounter": 25,
  "height": 0.5,
  "weight": 11,
  "baseExperience": 133,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": true,
  "shape": "humanoid",
  "color": "Purple",
  "model": {
    "default": "models/entity/sableye.geo.json"
  },
  "textures": {
    "default": "textures/entity/sableye.png"
  },
  "evolutions": []
};

export default sableye;