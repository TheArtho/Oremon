import { OremonData } from "../../types/OremonData";

const tyrantrum: OremonData = {
  "id": "oremon:tyrantrum",
  "name": "oremon.tyrantrum.name",
  "description": "oremon.tyrantrum.description",
  "types": [
    "rock",
    "dragon"
  ],
  "baseStats": {
    "hp": 82,
    "atk": 121,
    "def": 119,
    "atk_spe": 69,
    "def_spe": 59,
    "spd": 71
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "monster",
    "dragon"
  ],
  "hatchCounter": 30,
  "height": 2.5,
  "weight": 270,
  "baseExperience": 182,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Red",
  "model": {
    "default": "models/entity/tyrantrum.geo.json"
  },
  "textures": {
    "default": "textures/entity/tyrantrum.png"
  },
  "evolutions": []
};

export default tyrantrum;