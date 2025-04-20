import { OremonData } from "../../types/OremonData";

const lopunny: OremonData = {
  "id": "oremon:lopunny",
  "name": "oremon.lopunny.name",
  "description": "oremon.lopunny.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 76,
    "def": 84,
    "atk_spe": 54,
    "def_spe": 96,
    "spd": 105
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
  "genderRate": 4,
  "catchRate": 60,
  "eggGroups": [
    "ground",
    "humanshape"
  ],
  "hatchCounter": 20,
  "height": 1.2,
  "weight": 33.3,
  "baseExperience": 168,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": true,
  "shape": "upright",
  "color": "Brown",
  "model": {
    "default": "models/entity/lopunny.geo.json"
  },
  "textures": {
    "default": "textures/entity/lopunny.png"
  },
  "evolutions": []
};

export default lopunny;