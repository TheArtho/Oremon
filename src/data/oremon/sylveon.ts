import { OremonData } from "../../types/OremonData";

const sylveon: OremonData = {
  "id": "oremon:sylveon",
  "name": "oremon.sylveon.name",
  "description": "oremon.sylveon.description",
  "types": [
    "fairy"
  ],
  "baseStats": {
    "hp": 95,
    "atk": 65,
    "def": 65,
    "atk_spe": 110,
    "def_spe": 130,
    "spd": 60
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
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 35,
  "height": 1,
  "weight": 23.5,
  "baseExperience": 184,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Pink",
  "model": {
    "default": "models/entity/sylveon.geo.json"
  },
  "textures": {
    "default": "textures/entity/sylveon.png"
  },
  "evolutions": []
};

export default sylveon;