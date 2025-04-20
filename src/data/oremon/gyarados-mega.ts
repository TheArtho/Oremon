import { OremonData } from "../../types/OremonData";

const gyarados_mega: OremonData = {
  "id": "oremon:gyarados-mega",
  "name": "oremon.gyarados-mega.name",
  "description": "oremon.gyarados-mega.description",
  "types": [
    "water",
    "dark"
  ],
  "baseStats": {
    "hp": 95,
    "atk": 155,
    "def": 109,
    "atk_spe": 70,
    "def_spe": 130,
    "spd": 81
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "eggGroups": [
    "water2",
    "dragon"
  ],
  "height": 6.5,
  "weight": 305,
  "baseExperience": 224,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/gyarados-mega.geo.json"
  },
  "textures": {
    "default": "textures/entity/gyarados-mega.png"
  },
  "evolutions": []
};

export default gyarados_mega;