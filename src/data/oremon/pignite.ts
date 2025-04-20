import { OremonData } from "../../types/OremonData";

const pignite: OremonData = {
  "id": "oremon:pignite",
  "name": "oremon.pignite.name",
  "description": "oremon.pignite.description",
  "types": [
    "fire",
    "fighting"
  ],
  "baseStats": {
    "hp": 90,
    "atk": 93,
    "def": 55,
    "atk_spe": 70,
    "def_spe": 55,
    "spd": 55
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
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 55.5,
  "baseExperience": 146,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Red",
  "model": {
    "default": "models/entity/pignite.geo.json"
  },
  "textures": {
    "default": "textures/entity/pignite.png"
  },
  "evolutions": [
    {
      "into": "oremon:emboar",
      "method": "level-up",
      "conditions": {
        "minLevel": 36,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default pignite;