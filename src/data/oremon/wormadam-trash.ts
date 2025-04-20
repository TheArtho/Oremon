import { OremonData } from "../../types/OremonData";

const wormadam_trash: OremonData = {
  "id": "oremon:wormadam-trash",
  "name": "oremon.wormadam-trash.name",
  "description": "oremon.wormadam-trash.description",
  "types": [
    "bug",
    "steel"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 69,
    "def": 95,
    "atk_spe": 69,
    "def_spe": 95,
    "spd": 36
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "eggGroups": [
    "bug"
  ],
  "height": 0.5,
  "weight": 6.5,
  "baseExperience": 148,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/wormadam-trash.geo.json"
  },
  "textures": {
    "default": "textures/entity/wormadam-trash.png"
  },
  "evolutions": []
};

export default wormadam_trash;