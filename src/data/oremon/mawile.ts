import { OremonData } from "../../types/OremonData";

const mawile: OremonData = {
  "id": "oremon:mawile",
  "name": "oremon.mawile.name",
  "description": "oremon.mawile.description",
  "types": [
    "steel",
    "fairy"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 85,
    "def": 85,
    "atk_spe": 55,
    "def_spe": 55,
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
    "ground",
    "fairy"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 11.5,
  "baseExperience": 133,
  "growthRateId": "fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": true,
  "shape": "humanoid",
  "color": "Black",
  "model": {
    "default": "models/entity/mawile.geo.json"
  },
  "textures": {
    "default": "textures/entity/mawile.png"
  },
  "evolutions": []
};

export default mawile;