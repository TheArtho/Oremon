import { OremonData } from "../../types/OremonData";

const simipour: OremonData = {
  "id": "oremon:simipour",
  "name": "oremon.simipour.name",
  "description": "oremon.simipour.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 75,
    "atk": 98,
    "def": 63,
    "atk_spe": 98,
    "def_spe": 63,
    "spd": 101
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
  "genderRate": 1,
  "catchRate": 75,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 29,
  "baseExperience": 174,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Blue",
  "model": {
    "default": "models/entity/simipour.geo.json"
  },
  "textures": {
    "default": "textures/entity/simipour.png"
  },
  "evolutions": []
};

export default simipour;