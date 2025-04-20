import { OremonData } from "../../types/OremonData";

const electrode: OremonData = {
  "id": "oremon:electrode",
  "name": "oremon.electrode.name",
  "description": "oremon.electrode.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 50,
    "def": 70,
    "atk_spe": 80,
    "def_spe": 80,
    "spd": 150
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
  "genderRate": -1,
  "catchRate": 60,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 1.2,
  "weight": 66.6,
  "baseExperience": 172,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Red",
  "model": {
    "default": "models/entity/electrode.geo.json"
  },
  "textures": {
    "default": "textures/entity/electrode.png"
  },
  "evolutions": []
};

export default electrode;