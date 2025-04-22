import { OremonData } from "../../types/OremonData";

const furret: OremonData = {
  "id": "oremon:furret",
  "name": "oremon.furret.name",
  "description": "oremon.furret.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 85,
    "atk": 76,
    "def": 64,
    "atk_spe": 45,
    "def_spe": 55,
    "spd": 90
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 90,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 15,
  "height": 1.8,
  "weight": 32.5,
  "baseExperience": 145,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "evolutions": []
};

export default furret;