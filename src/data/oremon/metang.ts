import { OremonData } from "../../types/OremonData";

const metang: OremonData = {
  "id": "oremon:metang",
  "name": "oremon.metang.name",
  "description": "oremon.metang.description",
  "types": [
    "steel",
    "psychic"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 75,
    "def": 100,
    "atk_spe": 55,
    "def_spe": 80,
    "spd": 50
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
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 40,
  "height": 1.2,
  "weight": 202.5,
  "baseExperience": 147,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Blue",
  "model": {
    "default": "models/entity/metang.geo.json"
  },
  "textures": {
    "default": "textures/entity/metang.png"
  },
  "evolutions": [
    {
      "into": "oremon:metagross",
      "method": "level-up",
      "conditions": {
        "minLevel": 45,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default metang;