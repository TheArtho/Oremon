import { OremonData } from "../../types/OremonData";

const drapion: OremonData = {
  "id": "oremon:drapion",
  "name": "oremon.drapion.name",
  "description": "oremon.drapion.description",
  "types": [
    "poison",
    "dark"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 90,
    "def": 110,
    "atk_spe": 60,
    "def_spe": 75,
    "spd": 95
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
  "catchRate": 45,
  "eggGroups": [
    "bug",
    "water3"
  ],
  "hatchCounter": 20,
  "height": 1.3,
  "weight": 61.5,
  "baseExperience": 175,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Purple",
  "model": {
    "default": "models/entity/drapion.geo.json"
  },
  "textures": {
    "default": "textures/entity/drapion.png"
  },
  "evolutions": []
};

export default drapion;