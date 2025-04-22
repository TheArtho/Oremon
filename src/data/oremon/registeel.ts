import { OremonData } from "../../types/OremonData";

const registeel: OremonData = {
  "id": "oremon:registeel",
  "name": "oremon.registeel.name",
  "description": "oremon.registeel.description",
  "types": [
    "steel"
  ],
  "baseStats": {
    "hp": 80,
    "atk": 75,
    "def": 150,
    "atk_spe": 75,
    "def_spe": 150,
    "spd": 50
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 2,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 80,
  "height": 1.9,
  "weight": 205,
  "baseExperience": 261,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Gray",
  "evolutions": []
};

export default registeel;