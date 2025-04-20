import { OremonData } from "../../types/OremonData";

const terrakion: OremonData = {
  "id": "oremon:terrakion",
  "name": "oremon.terrakion.name",
  "description": "oremon.terrakion.description",
  "types": [
    "rock",
    "fighting"
  ],
  "baseStats": {
    "hp": 91,
    "atk": 129,
    "def": 90,
    "atk_spe": 72,
    "def_spe": 90,
    "spd": 108
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
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 80,
  "height": 1.9,
  "weight": 260,
  "baseExperience": 261,
  "growthRateId": "slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Gray",
  "model": {
    "default": "models/entity/terrakion.geo.json"
  },
  "textures": {
    "default": "textures/entity/terrakion.png"
  },
  "evolutions": []
};

export default terrakion;