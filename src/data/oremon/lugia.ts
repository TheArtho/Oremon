import { OremonData } from "../../types/OremonData";

const lugia: OremonData = {
  "id": "oremon:lugia",
  "name": "oremon.lugia.name",
  "description": "oremon.lugia.description",
  "types": [
    "psychic",
    "flying"
  ],
  "baseStats": {
    "hp": 106,
    "atk": 90,
    "def": 130,
    "atk_spe": 90,
    "def_spe": 154,
    "spd": 110
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
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 5.2,
  "weight": 216,
  "baseExperience": 306,
  "growthRateId": "slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "White",
  "model": {
    "default": "models/entity/lugia.geo.json"
  },
  "textures": {
    "default": "textures/entity/lugia.png"
  },
  "evolutions": []
};

export default lugia;