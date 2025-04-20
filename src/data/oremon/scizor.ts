import { OremonData } from "../../types/OremonData";

const scizor: OremonData = {
  "id": "oremon:scizor",
  "name": "oremon.scizor.name",
  "description": "oremon.scizor.description",
  "types": [
    "bug",
    "steel"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 130,
    "def": 100,
    "atk_spe": 55,
    "def_spe": 80,
    "spd": 65
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 25,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 25,
  "height": 1.8,
  "weight": 118,
  "baseExperience": 175,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": true,
  "shape": "bug wings",
  "color": "Red",
  "model": {
    "default": "models/entity/scizor.geo.json"
  },
  "textures": {
    "default": "textures/entity/scizor.png"
  },
  "evolutions": []
};

export default scizor;