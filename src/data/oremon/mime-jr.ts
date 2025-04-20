import { OremonData } from "../../types/OremonData";

const mime_jr: OremonData = {
  "id": "oremon:mime-jr",
  "name": "oremon.mime-jr.name",
  "description": "oremon.mime-jr.description",
  "types": [
    "psychic",
    "fairy"
  ],
  "baseStats": {
    "hp": 20,
    "atk": 25,
    "def": 45,
    "atk_spe": 70,
    "def_spe": 90,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 145,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 25,
  "height": 0.6,
  "weight": 13,
  "baseExperience": 62,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": true,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Pink",
  "model": {
    "default": "models/entity/mime-jr.geo.json"
  },
  "textures": {
    "default": "textures/entity/mime-jr.png"
  },
  "evolutions": [
    {
      "into": "oremon:mr-mime",
      "method": "level-up",
      "conditions": {
        "knownMove": "move:102",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default mime_jr;