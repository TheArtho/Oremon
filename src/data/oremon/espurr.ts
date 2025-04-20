import { OremonData } from "../../types/OremonData";

const espurr: OremonData = {
  "id": "oremon:espurr",
  "name": "oremon.espurr.name",
  "description": "oremon.espurr.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 62,
    "atk": 48,
    "def": 54,
    "atk_spe": 63,
    "def_spe": 60,
    "spd": 68
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.3,
  "weight": 3.5,
  "baseExperience": 71,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Gray",
  "model": {
    "default": "models/entity/espurr.geo.json"
  },
  "textures": {
    "default": "textures/entity/espurr.png"
  },
  "evolutions": [
    {
      "into": "oremon:meowstic",
      "method": "level-up",
      "conditions": {
        "minLevel": 25,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    },
    {
      "into": "oremon:meowstic",
      "method": "level-up",
      "conditions": {
        "minLevel": 25,
        "gender": "male",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default espurr;