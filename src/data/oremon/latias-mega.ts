import { OremonData } from "../../types/OremonData";

const latias_mega: OremonData = {
  "id": "oremon:latias-mega",
  "name": "oremon.latias-mega.name",
  "description": "oremon.latias-mega.description",
  "types": [
    "dragon",
    "psychic"
  ],
  "baseStats": {
    "hp": 80,
    "atk": 100,
    "def": 120,
    "atk_spe": 140,
    "def_spe": 150,
    "spd": 110
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 3,
    "spd": 0
  },
  "abilities": {},
  "eggGroups": [
    "no-eggs"
  ],
  "height": 1.8,
  "weight": 52,
  "baseExperience": 315,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/latias-mega.geo.json"
  },
  "textures": {
    "default": "textures/entity/latias-mega.png"
  },
  "evolutions": []
};

export default latias_mega;