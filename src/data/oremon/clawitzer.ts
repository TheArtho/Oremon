import { OremonData } from "../../types/OremonData";

const clawitzer: OremonData = {
  "id": "oremon:clawitzer",
  "name": "oremon.clawitzer.name",
  "description": "oremon.clawitzer.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 71,
    "atk": 73,
    "def": 88,
    "atk_spe": 120,
    "def_spe": 89,
    "spd": 59
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 2,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 55,
  "eggGroups": [
    "water1",
    "water3"
  ],
  "hatchCounter": 15,
  "height": 1.3,
  "weight": 35.3,
  "baseExperience": 100,
  "growthRateId": "slow",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Blue",
  "model": {
    "default": "models/entity/clawitzer.geo.json"
  },
  "textures": {
    "default": "textures/entity/clawitzer.png"
  },
  "evolutions": []
};

export default clawitzer;