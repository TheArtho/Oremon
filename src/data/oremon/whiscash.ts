import { OremonData } from "../../types/OremonData";

const whiscash: OremonData = {
  "id": "oremon:whiscash",
  "name": "oremon.whiscash.name",
  "description": "oremon.whiscash.description",
  "types": [
    "water",
    "ground"
  ],
  "baseStats": {
    "hp": 110,
    "atk": 78,
    "def": 73,
    "atk_spe": 76,
    "def_spe": 71,
    "spd": 60
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
  "catchRate": 75,
  "eggGroups": [
    "water2"
  ],
  "hatchCounter": 20,
  "height": 0.9,
  "weight": 23.6,
  "baseExperience": 164,
  "growthRateId": "medium",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "fish",
  "color": "Blue",
  "model": {
    "default": "models/entity/whiscash.geo.json"
  },
  "textures": {
    "default": "textures/entity/whiscash.png"
  },
  "evolutions": []
};

export default whiscash;