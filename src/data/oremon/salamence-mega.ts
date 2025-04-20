import { OremonData } from "../../types/OremonData";

const salamence_mega: OremonData = {
  "id": "oremon:salamence-mega",
  "name": "oremon.salamence-mega.name",
  "description": "oremon.salamence-mega.description",
  "types": [
    "dragon",
    "flying"
  ],
  "baseStats": {
    "hp": 95,
    "atk": 145,
    "def": 130,
    "atk_spe": 120,
    "def_spe": 90,
    "spd": 120
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
  "eggGroups": [
    "dragon"
  ],
  "height": 1.8,
  "weight": 112.6,
  "baseExperience": 315,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/salamence-mega.geo.json"
  },
  "textures": {
    "default": "textures/entity/salamence-mega.png"
  },
  "evolutions": []
};

export default salamence_mega;