import { OremonData } from "../../types/OremonData";

const drifblim: OremonData = {
  "id": "oremon:drifblim",
  "name": "oremon.drifblim.name",
  "description": "oremon.drifblim.description",
  "types": [
    "ghost",
    "flying"
  ],
  "baseStats": {
    "hp": 150,
    "atk": 80,
    "def": 44,
    "atk_spe": 90,
    "def_spe": 54,
    "spd": 80
  },
  "evYield": {
    "hp": 2,
    "atk": 0,
    "def": 0,
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
  "hatchCounter": 30,
  "height": 1.2,
  "weight": 15,
  "baseExperience": 174,
  "growthRateId": "fast-then-very-slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Purple",
  "model": {
    "default": "models/entity/drifblim.geo.json"
  },
  "textures": {
    "default": "textures/entity/drifblim.png"
  },
  "evolutions": []
};

export default drifblim;