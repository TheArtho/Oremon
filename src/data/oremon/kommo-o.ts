import { OremonData } from "../../types/OremonData";

const kommo_o: OremonData = {
  "id": "oremon:kommo-o",
  "name": "oremon.kommo-o.name",
  "description": "oremon.kommo-o.description",
  "types": [
    "dragon",
    "fighting"
  ],
  "baseStats": {
    "hp": 75,
    "atk": 110,
    "def": 125,
    "atk_spe": 100,
    "def_spe": 105,
    "spd": 85
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 3,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 1.6,
  "weight": 78.2,
  "baseExperience": 270,
  "growthRateId": "slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Gray",
  "model": {
    "default": "models/entity/kommo-o.geo.json"
  },
  "textures": {
    "default": "textures/entity/kommo-o.png"
  },
  "evolutions": []
};

export default kommo_o;