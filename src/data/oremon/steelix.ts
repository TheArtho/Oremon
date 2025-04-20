import { OremonData } from "../../types/OremonData";

const steelix: OremonData = {
  "id": "oremon:steelix",
  "name": "oremon.steelix.name",
  "description": "oremon.steelix.description",
  "types": [
    "steel",
    "ground"
  ],
  "baseStats": {
    "hp": 75,
    "atk": 85,
    "def": 200,
    "atk_spe": 55,
    "def_spe": 65,
    "spd": 30
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 2,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 25,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 25,
  "height": 9.2,
  "weight": 400,
  "baseExperience": 179,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": true,
  "shape": "squiggle",
  "color": "Gray",
  "model": {
    "default": "models/entity/steelix.geo.json"
  },
  "textures": {
    "default": "textures/entity/steelix.png"
  },
  "evolutions": []
};

export default steelix;