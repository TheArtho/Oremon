import { OremonData } from "../../types/OremonData";

const parasect: OremonData = {
  "id": "oremon:parasect",
  "name": "oremon.parasect.name",
  "description": "oremon.parasect.description",
  "types": [
    "bug",
    "grass"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 95,
    "def": 80,
    "atk_spe": 60,
    "def_spe": 80,
    "spd": 30
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 75,
  "eggGroups": [
    "bug",
    "plant"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 29.5,
  "baseExperience": 142,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Red",
  "model": {
    "default": "models/entity/parasect.geo.json"
  },
  "textures": {
    "default": "textures/entity/parasect.png"
  },
  "evolutions": []
};

export default parasect;