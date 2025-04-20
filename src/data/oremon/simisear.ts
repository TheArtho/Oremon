import { OremonData } from "../../types/OremonData";

const simisear: OremonData = {
  "id": "oremon:simisear",
  "name": "oremon.simisear.name",
  "description": "oremon.simisear.description",
  "types": [
    "fire"
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
  "weight": 28,
  "baseExperience": 174,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Red",
  "model": {
    "default": "models/entity/simisear.geo.json"
  },
  "textures": {
    "default": "textures/entity/simisear.png"
  },
  "evolutions": []
};

export default simisear;