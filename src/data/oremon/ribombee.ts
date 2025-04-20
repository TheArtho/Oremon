import { OremonData } from "../../types/OremonData";

const ribombee: OremonData = {
  "id": "oremon:ribombee",
  "name": "oremon.ribombee.name",
  "description": "oremon.ribombee.description",
  "types": [
    "bug",
    "fairy"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 55,
    "def": 60,
    "atk_spe": 95,
    "def_spe": 70,
    "spd": 124
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 75,
  "eggGroups": [
    "bug",
    "fairy"
  ],
  "hatchCounter": 20,
  "height": 0.2,
  "weight": 0.5,
  "baseExperience": 162,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "bug wings",
  "color": "Yellow",
  "model": {
    "default": "models/entity/ribombee.geo.json"
  },
  "textures": {
    "default": "textures/entity/ribombee.png"
  },
  "evolutions": []
};

export default ribombee;