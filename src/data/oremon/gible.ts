import { OremonData } from "../../types/OremonData";

const gible: OremonData = {
  "id": "oremon:gible",
  "name": "oremon.gible.name",
  "description": "oremon.gible.description",
  "types": [
    "dragon",
    "ground"
  ],
  "baseStats": {
    "hp": 58,
    "atk": 70,
    "def": 45,
    "atk_spe": 40,
    "def_spe": 45,
    "spd": 42
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "monster",
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 0.7,
  "weight": 20.5,
  "baseExperience": 60,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Blue",
  "model": {
    "default": "models/entity/gible.geo.json"
  },
  "textures": {
    "default": "textures/entity/gible.png"
  },
  "evolutions": [
    {
      "into": "oremon:gabite",
      "method": "level-up",
      "conditions": {
        "minLevel": 24,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default gible;