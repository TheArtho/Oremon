import { OremonData } from "../../types/OremonData";

const abomasnow: OremonData = {
  "id": "oremon:abomasnow",
  "name": "oremon.abomasnow.name",
  "description": "oremon.abomasnow.description",
  "types": [
    "grass",
    "ice"
  ],
  "baseStats": {
    "hp": 90,
    "atk": 92,
    "def": 75,
    "atk_spe": 92,
    "def_spe": 85,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 60,
  "eggGroups": [
    "monster",
    "plant"
  ],
  "hatchCounter": 20,
  "height": 2.2,
  "weight": 135.5,
  "baseExperience": 173,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": true,
  "shape": "upright",
  "color": "White",
  "model": {
    "default": "models/entity/abomasnow.geo.json"
  },
  "textures": {
    "default": "textures/entity/abomasnow.png"
  },
  "evolutions": []
};

export default abomasnow;