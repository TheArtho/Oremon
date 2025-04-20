import { OremonData } from "../../types/OremonData";

const octillery: OremonData = {
  "id": "oremon:octillery",
  "name": "oremon.octillery.name",
  "description": "oremon.octillery.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 75,
    "atk": 105,
    "def": 75,
    "atk_spe": 105,
    "def_spe": 75,
    "spd": 45
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 75,
  "eggGroups": [
    "water1",
    "water2"
  ],
  "hatchCounter": 20,
  "height": 0.9,
  "weight": 28.5,
  "baseExperience": 168,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "tentacles",
  "color": "Red",
  "model": {
    "default": "models/entity/octillery.geo.json"
  },
  "textures": {
    "default": "textures/entity/octillery.png"
  },
  "evolutions": []
};

export default octillery;