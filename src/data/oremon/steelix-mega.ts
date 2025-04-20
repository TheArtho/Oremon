import { OremonData } from "../../types/OremonData";

const steelix_mega: OremonData = {
  "id": "oremon:steelix-mega",
  "name": "oremon.steelix-mega.name",
  "description": "oremon.steelix-mega.description",
  "types": [
    "steel",
    "ground"
  ],
  "baseStats": {
    "hp": 75,
    "atk": 125,
    "def": 230,
    "atk_spe": 55,
    "def_spe": 95,
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
  "eggGroups": [
    "mineral"
  ],
  "height": 10.5,
  "weight": 740,
  "baseExperience": 214,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/steelix-mega.geo.json"
  },
  "textures": {
    "default": "textures/entity/steelix-mega.png"
  },
  "evolutions": []
};

export default steelix_mega;