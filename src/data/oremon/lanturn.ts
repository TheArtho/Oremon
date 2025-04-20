import { OremonData } from "../../types/OremonData";

const lanturn: OremonData = {
  "id": "oremon:lanturn",
  "name": "oremon.lanturn.name",
  "description": "oremon.lanturn.description",
  "types": [
    "water",
    "electric"
  ],
  "baseStats": {
    "hp": 125,
    "atk": 58,
    "def": 58,
    "atk_spe": 76,
    "def_spe": 76,
    "spd": 67
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
  "height": 1.2,
  "weight": 22.5,
  "baseExperience": 161,
  "growthRateId": "slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "fish",
  "color": "Blue",
  "model": {
    "default": "models/entity/lanturn.geo.json"
  },
  "textures": {
    "default": "textures/entity/lanturn.png"
  },
  "evolutions": []
};

export default lanturn;