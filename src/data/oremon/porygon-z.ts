import { OremonData } from "../../types/OremonData";

const porygon_z: OremonData = {
  "id": "oremon:porygon-z",
  "name": "oremon.porygon-z.name",
  "description": "oremon.porygon-z.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 85,
    "atk": 80,
    "def": 70,
    "atk_spe": 135,
    "def_spe": 75,
    "spd": 90
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 3,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 30,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 0.9,
  "weight": 34,
  "baseExperience": 241,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Red",
  "model": {
    "default": "models/entity/porygon-z.geo.json"
  },
  "textures": {
    "default": "textures/entity/porygon-z.png"
  },
  "evolutions": []
};

export default porygon_z;