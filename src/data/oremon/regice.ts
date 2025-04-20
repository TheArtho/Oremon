import { OremonData } from "../../types/OremonData";

const regice: OremonData = {
  "id": "oremon:regice",
  "name": "oremon.regice.name",
  "description": "oremon.regice.description",
  "types": [
    "ice"
  ],
  "baseStats": {
    "hp": 80,
    "atk": 50,
    "def": 100,
    "atk_spe": 100,
    "def_spe": 200,
    "spd": 50
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
  "hatchCounter": 80,
  "height": 1.8,
  "weight": 175,
  "baseExperience": 261,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Blue",
  "model": {
    "default": "models/entity/regice.geo.json"
  },
  "textures": {
    "default": "textures/entity/regice.png"
  },
  "evolutions": []
};

export default regice;