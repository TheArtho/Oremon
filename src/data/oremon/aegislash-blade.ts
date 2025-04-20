import { OremonData } from "../../types/OremonData";

const aegislash_blade: OremonData = {
  "id": "oremon:aegislash-blade",
  "name": "oremon.aegislash-blade.name",
  "description": "oremon.aegislash-blade.description",
  "types": [
    "steel",
    "ghost"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 150,
    "def": 50,
    "atk_spe": 150,
    "def_spe": 50,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "eggGroups": [
    "mineral"
  ],
  "height": 1.7,
  "weight": 53,
  "baseExperience": 234,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/aegislash-blade.geo.json"
  },
  "textures": {
    "default": "textures/entity/aegislash-blade.png"
  },
  "evolutions": []
};

export default aegislash_blade;