import { OremonData } from "../../types/OremonData";

const celebi: OremonData = {
  "id": "oremon:celebi",
  "name": "oremon.celebi.name",
  "description": "oremon.celebi.description",
  "types": [
    "psychic",
    "grass"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 100,
    "def": 100,
    "atk_spe": 100,
    "def_spe": 100,
    "spd": 100
  },
  "evYield": {
    "hp": 3,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 45,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 0.6,
  "weight": 5,
  "baseExperience": 270,
  "growthRateId": "medium-slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Green",
  "model": {
    "default": "models/entity/celebi.geo.json"
  },
  "textures": {
    "default": "textures/entity/celebi.png"
  },
  "evolutions": []
};

export default celebi;