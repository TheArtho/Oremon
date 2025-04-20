import { OremonData } from "../../types/OremonData";

const ditto: OremonData = {
  "id": "oremon:ditto",
  "name": "oremon.ditto.name",
  "description": "oremon.ditto.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 48,
    "atk": 48,
    "def": 48,
    "atk_spe": 48,
    "def_spe": 48,
    "spd": 48
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
  "genderRate": -1,
  "catchRate": 35,
  "eggGroups": [
    "ditto"
  ],
  "hatchCounter": 20,
  "height": 0.3,
  "weight": 4,
  "baseExperience": 101,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Purple",
  "model": {
    "default": "models/entity/ditto.geo.json"
  },
  "textures": {
    "default": "textures/entity/ditto.png"
  },
  "evolutions": []
};

export default ditto;