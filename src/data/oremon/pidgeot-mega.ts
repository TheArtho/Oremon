import { OremonData } from "../../types/OremonData";

const pidgeot_mega: OremonData = {
  "id": "oremon:pidgeot-mega",
  "name": "oremon.pidgeot-mega.name",
  "description": "oremon.pidgeot-mega.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 83,
    "atk": 80,
    "def": 80,
    "atk_spe": 135,
    "def_spe": 80,
    "spd": 121
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 3
  },
  "abilities": {},
  "eggGroups": [
    "flying"
  ],
  "height": 2.2,
  "weight": 50.5,
  "baseExperience": 261,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/pidgeot-mega.geo.json"
  },
  "textures": {
    "default": "textures/entity/pidgeot-mega.png"
  },
  "evolutions": []
};

export default pidgeot_mega;