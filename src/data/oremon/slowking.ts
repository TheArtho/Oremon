import { OremonData } from "../../types/OremonData";

const slowking: OremonData = {
  "id": "oremon:slowking",
  "name": "oremon.slowking.name",
  "description": "oremon.slowking.description",
  "types": [
    "water",
    "psychic"
  ],
  "baseStats": {
    "hp": 95,
    "atk": 75,
    "def": 80,
    "atk_spe": 100,
    "def_spe": 110,
    "spd": 30
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 3,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 70,
  "eggGroups": [
    "monster",
    "water1"
  ],
  "hatchCounter": 20,
  "height": 2,
  "weight": 79.5,
  "baseExperience": 172,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Pink",
  "model": {
    "default": "models/entity/slowking.geo.json"
  },
  "textures": {
    "default": "textures/entity/slowking.png"
  },
  "evolutions": []
};

export default slowking;