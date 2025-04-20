import { OremonData } from "../../types/OremonData";

const raticate_alola: OremonData = {
  "id": "oremon:raticate-alola",
  "name": "oremon.raticate-alola.name",
  "description": "oremon.raticate-alola.description",
  "types": [
    "dark",
    "normal"
  ],
  "baseStats": {
    "hp": 75,
    "atk": 71,
    "def": 70,
    "atk_spe": 40,
    "def_spe": 80,
    "spd": 77
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "eggGroups": [
    "ground"
  ],
  "height": 0.7,
  "weight": 25.5,
  "baseExperience": 145,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/raticate-alola.geo.json"
  },
  "textures": {
    "default": "textures/entity/raticate-alola.png"
  },
  "evolutions": []
};

export default raticate_alola;