import { OremonData } from "../../types/OremonData";

const tepig: OremonData = {
  "id": "oremon:tepig",
  "name": "oremon.tepig.name",
  "description": "oremon.tepig.description",
  "types": [
    "fire"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 63,
    "def": 45,
    "atk_spe": 45,
    "def_spe": 45,
    "spd": 45
  },
  "evYield": {
    "hp": 1,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 9.9,
  "baseExperience": 62,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Red",
  "model": {
    "default": "models/entity/tepig.geo.json"
  },
  "textures": {
    "default": "textures/entity/tepig.png"
  },
  "evolutions": [
    {
      "into": "oremon:pignite",
      "method": "level-up",
      "conditions": {
        "minLevel": 17,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default tepig;