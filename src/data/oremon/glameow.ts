import { OremonData } from "../../types/OremonData";

const glameow: OremonData = {
  "id": "oremon:glameow",
  "name": "oremon.glameow.name",
  "description": "oremon.glameow.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 49,
    "atk": 55,
    "def": 42,
    "atk_spe": 42,
    "def_spe": 37,
    "spd": 85
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
  "genderRate": 6,
  "catchRate": 190,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 3.9,
  "baseExperience": 62,
  "growthRateId": "fast",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:purugly",
      "method": "level-up",
      "conditions": {
        "minLevel": 38,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default glameow;