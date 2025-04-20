import { OremonData } from "../../types/OremonData";

const rhydon: OremonData = {
  "id": "oremon:rhydon",
  "name": "oremon.rhydon.name",
  "description": "oremon.rhydon.description",
  "types": [
    "ground",
    "rock"
  ],
  "baseStats": {
    "hp": 105,
    "atk": 130,
    "def": 120,
    "atk_spe": 45,
    "def_spe": 45,
    "spd": 40
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
  "genderRate": 4,
  "catchRate": 60,
  "eggGroups": [
    "monster",
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1.9,
  "weight": 120,
  "baseExperience": 170,
  "growthRateId": "slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Gray",
  "model": {
    "default": "models/entity/rhydon.geo.json"
  },
  "textures": {
    "default": "textures/entity/rhydon.png"
  },
  "evolutions": [
    {
      "into": "oremon:rhyperior",
      "method": "trade",
      "conditions": {
        "heldItem": "item:298",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default rhydon;