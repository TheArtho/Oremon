import { OremonData } from "../../types/OremonData";

const garchomp: OremonData = {
  "id": "oremon:garchomp",
  "name": "oremon.garchomp.name",
  "description": "oremon.garchomp.description",
  "types": [
    "dragon",
    "ground"
  ],
  "baseStats": {
    "hp": 108,
    "atk": 130,
    "def": 95,
    "atk_spe": 80,
    "def_spe": 85,
    "spd": 102
  },
  "evYield": {
    "hp": 0,
    "atk": 3,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "monster",
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 1.9,
  "weight": 95,
  "baseExperience": 270,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": true,
  "shape": "upright",
  "color": "Blue",
  "model": {
    "default": "models/entity/garchomp.geo.json"
  },
  "textures": {
    "default": "textures/entity/garchomp.png"
  },
  "evolutions": []
};

export default garchomp;