import { OremonData } from "../../types/OremonData";

const sandshrew: OremonData = {
  "id": "oremon:sandshrew",
  "name": "oremon.sandshrew.name",
  "description": "oremon.sandshrew.description",
  "types": [
    "ground"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 75,
    "def": 85,
    "atk_spe": 20,
    "def_spe": 30,
    "spd": 40
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 12,
  "baseExperience": 60,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:sandslash",
      "method": "level-up",
      "conditions": {
        "minLevel": 22,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default sandshrew;