import { OremonData } from "../../types/OremonData";

const spiritomb: OremonData = {
  "id": "oremon:spiritomb",
  "name": "oremon.spiritomb.name",
  "description": "oremon.spiritomb.description",
  "types": [
    "ghost",
    "dark"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 92,
    "def": 108,
    "atk_spe": 92,
    "def_spe": 108,
    "spd": 35
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 100,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 30,
  "height": 1,
  "weight": 108,
  "baseExperience": 170,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Purple",
  "model": {
    "default": "models/entity/spiritomb.geo.json"
  },
  "textures": {
    "default": "textures/entity/spiritomb.png"
  },
  "evolutions": []
};

export default spiritomb;