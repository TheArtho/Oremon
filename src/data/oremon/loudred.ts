import { OremonData } from "../../types/OremonData";

const loudred: OremonData = {
  "id": "oremon:loudred",
  "name": "oremon.loudred.name",
  "description": "oremon.loudred.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 84,
    "atk": 71,
    "def": 43,
    "atk_spe": 71,
    "def_spe": 43,
    "spd": 48
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
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "monster",
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 40.5,
  "baseExperience": 126,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Blue",
  "model": {
    "default": "models/entity/loudred.geo.json"
  },
  "textures": {
    "default": "textures/entity/loudred.png"
  },
  "evolutions": [
    {
      "into": "oremon:exploud",
      "method": "level-up",
      "conditions": {
        "minLevel": 40,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default loudred;