import { OremonData } from "../../types/OremonData";

const jigglypuff: OremonData = {
  "id": "oremon:jigglypuff",
  "name": "oremon.jigglypuff.name",
  "description": "oremon.jigglypuff.description",
  "types": [
    "normal",
    "fairy"
  ],
  "baseStats": {
    "hp": 115,
    "atk": 45,
    "def": 20,
    "atk_spe": 45,
    "def_spe": 25,
    "spd": 20
  },
  "evYield": {
    "hp": 2,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 6,
  "catchRate": 170,
  "eggGroups": [
    "fairy"
  ],
  "hatchCounter": 10,
  "height": 0.5,
  "weight": 5.5,
  "baseExperience": 95,
  "growthRateId": "fast",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Pink",
  "model": {
    "default": "models/entity/jigglypuff.geo.json"
  },
  "textures": {
    "default": "textures/entity/jigglypuff.png"
  },
  "evolutions": [
    {
      "into": "oremon:wigglytuff",
      "method": "use-item",
      "conditions": {
        "item": "item:81",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default jigglypuff;