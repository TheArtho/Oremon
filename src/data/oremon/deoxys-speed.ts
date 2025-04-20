import { OremonData } from "../../types/OremonData";

const deoxys_speed: OremonData = {
  "id": "oremon:deoxys-speed",
  "name": "oremon.deoxys-speed.name",
  "description": "oremon.deoxys-speed.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 95,
    "def": 90,
    "atk_spe": 95,
    "def_spe": 90,
    "spd": 180
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
    "no-eggs"
  ],
  "height": 1.7,
  "weight": 60.8,
  "baseExperience": 270,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/deoxys-speed.geo.json"
  },
  "textures": {
    "default": "textures/entity/deoxys-speed.png"
  },
  "evolutions": []
};

export default deoxys_speed;