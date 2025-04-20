import { OremonData } from "../../types/OremonData";

const marowak: OremonData = {
  "id": "oremon:marowak",
  "name": "oremon.marowak.name",
  "description": "oremon.marowak.description",
  "types": [
    "ground"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 80,
    "def": 110,
    "atk_spe": 50,
    "def_spe": 80,
    "spd": 45
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 2,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 75,
  "eggGroups": [
    "monster"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 45,
  "baseExperience": 149,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Brown",
  "model": {
    "default": "models/entity/marowak.geo.json"
  },
  "textures": {
    "default": "textures/entity/marowak.png"
  },
  "evolutions": []
};

export default marowak;