import { OremonData } from "../../types/OremonData";

const wormadam_plant: OremonData = {
  "id": "oremon:wormadam-plant",
  "name": "oremon.wormadam-plant.name",
  "description": "oremon.wormadam-plant.description",
  "types": [
    "bug",
    "grass"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 59,
    "def": 85,
    "atk_spe": 79,
    "def_spe": 105,
    "spd": 36
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 2,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 8,
  "catchRate": 45,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 15,
  "height": 0.5,
  "weight": 6.5,
  "baseExperience": 148,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Green",
  "model": {
    "default": "models/entity/wormadam-plant.geo.json"
  },
  "textures": {
    "default": "textures/entity/wormadam-plant.png"
  },
  "evolutions": []
};

export default wormadam_plant;