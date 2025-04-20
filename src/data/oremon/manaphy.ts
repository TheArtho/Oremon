import { OremonData } from "../../types/OremonData";

const manaphy: OremonData = {
  "id": "oremon:manaphy",
  "name": "oremon.manaphy.name",
  "description": "oremon.manaphy.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 100,
    "def": 100,
    "atk_spe": 100,
    "def_spe": 100,
    "spd": 100
  },
  "evYield": {
    "hp": 3,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "water1",
    "fairy"
  ],
  "hatchCounter": 10,
  "height": 0.3,
  "weight": 1.4,
  "baseExperience": 270,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Blue",
  "model": {
    "default": "models/entity/manaphy.geo.json"
  },
  "textures": {
    "default": "textures/entity/manaphy.png"
  },
  "evolutions": []
};

export default manaphy;