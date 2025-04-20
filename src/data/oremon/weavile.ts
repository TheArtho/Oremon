import { OremonData } from "../../types/OremonData";

const weavile: OremonData = {
  "id": "oremon:weavile",
  "name": "oremon.weavile.name",
  "description": "oremon.weavile.description",
  "types": [
    "dark",
    "ice"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 120,
    "def": 65,
    "atk_spe": 45,
    "def_spe": 85,
    "spd": 125
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1.1,
  "weight": 34,
  "baseExperience": 179,
  "growthRateId": "medium-slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Black",
  "model": {
    "default": "models/entity/weavile.geo.json"
  },
  "textures": {
    "default": "textures/entity/weavile.png"
  },
  "evolutions": []
};

export default weavile;