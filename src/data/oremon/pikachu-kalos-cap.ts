import { OremonData } from "../../types/OremonData";

const pikachu_kalos_cap: OremonData = {
  "id": "oremon:pikachu-kalos-cap",
  "name": "oremon.pikachu-kalos-cap.name",
  "description": "oremon.pikachu-kalos-cap.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 35,
    "atk": 55,
    "def": 40,
    "atk_spe": 50,
    "def_spe": 50,
    "spd": 90
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
    "ground",
    "fairy"
  ],
  "height": 0.4,
  "weight": 6,
  "baseExperience": 112,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/pikachu-kalos-cap.geo.json"
  },
  "textures": {
    "default": "textures/entity/pikachu-kalos-cap.png"
  },
  "evolutions": []
};

export default pikachu_kalos_cap;