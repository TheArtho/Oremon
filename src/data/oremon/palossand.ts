import { OremonData } from "../../types/OremonData";

const palossand: OremonData = {
  "id": "oremon:palossand",
  "name": "oremon.palossand.name",
  "description": "oremon.palossand.description",
  "types": [
    "ghost",
    "ground"
  ],
  "baseStats": {
    "hp": 85,
    "atk": 75,
    "def": 110,
    "atk_spe": 100,
    "def_spe": 75,
    "spd": 35
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
  "catchRate": 60,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 15,
  "height": 1.3,
  "weight": 250,
  "baseExperience": 168,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Brown",
  "model": {
    "default": "models/entity/palossand.geo.json"
  },
  "textures": {
    "default": "textures/entity/palossand.png"
  },
  "evolutions": []
};

export default palossand;