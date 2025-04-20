import { OremonData } from "../../types/OremonData";

const wishiwashi_solo: OremonData = {
  "id": "oremon:wishiwashi-solo",
  "name": "oremon.wishiwashi-solo.name",
  "description": "oremon.wishiwashi-solo.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 20,
    "def": 20,
    "atk_spe": 25,
    "def_spe": 25,
    "spd": 40
  },
  "evYield": {
    "hp": 1,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 60,
  "eggGroups": [
    "water2"
  ],
  "hatchCounter": 15,
  "height": 0.2,
  "weight": 0.3,
  "baseExperience": 61,
  "growthRateId": "fast",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "fish",
  "color": "Blue",
  "model": {
    "default": "models/entity/wishiwashi-solo.geo.json"
  },
  "textures": {
    "default": "textures/entity/wishiwashi-solo.png"
  },
  "evolutions": []
};

export default wishiwashi_solo;