import { OremonData } from "../../types/OremonData";

const purugly: OremonData = {
  "id": "oremon:purugly",
  "name": "oremon.purugly.name",
  "description": "oremon.purugly.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 71,
    "atk": 82,
    "def": 64,
    "atk_spe": 64,
    "def_spe": 59,
    "spd": 112
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
  "genderRate": 6,
  "catchRate": 75,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 43.8,
  "baseExperience": 158,
  "growthRateId": "fast",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Gray",
  "model": {
    "default": "models/entity/purugly.geo.json"
  },
  "textures": {
    "default": "textures/entity/purugly.png"
  },
  "evolutions": []
};

export default purugly;