import { OremonData } from "../../types/OremonData";

const spinda: OremonData = {
  "id": "oremon:spinda",
  "name": "oremon.spinda.name",
  "description": "oremon.spinda.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 60,
    "def": 60,
    "atk_spe": 60,
    "def_spe": 60,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "ground",
    "humanshape"
  ],
  "hatchCounter": 15,
  "height": 1.1,
  "weight": 5,
  "baseExperience": 126,
  "growthRateId": "fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Brown",
  "model": {
    "default": "models/entity/spinda.geo.json"
  },
  "textures": {
    "default": "textures/entity/spinda.png"
  },
  "evolutions": []
};

export default spinda;