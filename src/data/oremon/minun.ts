import { OremonData } from "../../types/OremonData";

const minun: OremonData = {
  "id": "oremon:minun",
  "name": "oremon.minun.name",
  "description": "oremon.minun.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 40,
    "def": 50,
    "atk_spe": 75,
    "def_spe": 85,
    "spd": 95
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 200,
  "eggGroups": [
    "fairy"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 4.2,
  "baseExperience": 142,
  "growthRateId": "medium",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Yellow",
  "evolutions": []
};

export default minun;