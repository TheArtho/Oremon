import { OremonData } from "../../types/OremonData";

const tangrowth: OremonData = {
  "id": "oremon:tangrowth",
  "name": "oremon.tangrowth.name",
  "description": "oremon.tangrowth.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 100,
    "def": 125,
    "atk_spe": 110,
    "def_spe": 50,
    "spd": 50
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 2,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 30,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 2,
  "weight": 128.6,
  "baseExperience": 187,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Blue",
  "model": {
    "default": "models/entity/tangrowth.geo.json"
  },
  "textures": {
    "default": "textures/entity/tangrowth.png"
  },
  "evolutions": []
};

export default tangrowth;