import { OremonData } from "../../types/OremonData";

const minior_violet: OremonData = {
  "id": "oremon:minior-violet",
  "name": "oremon.minior-violet.name",
  "description": "oremon.minior-violet.description",
  "types": [
    "rock",
    "flying"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 100,
    "def": 60,
    "atk_spe": 100,
    "def_spe": 60,
    "spd": 120
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
  "eggGroups": [
    "mineral"
  ],
  "height": 0.3,
  "weight": 0.3,
  "baseExperience": 175,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/minior-violet.geo.json"
  },
  "textures": {
    "default": "textures/entity/minior-violet.png"
  },
  "evolutions": []
};

export default minior_violet;