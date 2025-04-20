import { OremonData } from "../../types/OremonData";

const smeargle: OremonData = {
  "id": "oremon:smeargle",
  "name": "oremon.smeargle.name",
  "description": "oremon.smeargle.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 20,
    "def": 35,
    "atk_spe": 20,
    "def_spe": 45,
    "spd": 75
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1.2,
  "weight": 58,
  "baseExperience": 88,
  "growthRateId": "fast",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "White",
  "model": {
    "default": "models/entity/smeargle.geo.json"
  },
  "textures": {
    "default": "textures/entity/smeargle.png"
  },
  "evolutions": []
};

export default smeargle;