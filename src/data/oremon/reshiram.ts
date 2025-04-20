import { OremonData } from "../../types/OremonData";

const reshiram: OremonData = {
  "id": "oremon:reshiram",
  "name": "oremon.reshiram.name",
  "description": "oremon.reshiram.description",
  "types": [
    "dragon",
    "fire"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 120,
    "def": 100,
    "atk_spe": 150,
    "def_spe": 120,
    "spd": 90
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 3,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 3.2,
  "weight": 330,
  "baseExperience": 306,
  "growthRateId": "slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "White",
  "model": {
    "default": "models/entity/reshiram.geo.json"
  },
  "textures": {
    "default": "textures/entity/reshiram.png"
  },
  "evolutions": []
};

export default reshiram;