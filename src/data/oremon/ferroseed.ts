import { OremonData } from "../../types/OremonData";

const ferroseed: OremonData = {
  "id": "oremon:ferroseed",
  "name": "oremon.ferroseed.name",
  "description": "oremon.ferroseed.description",
  "types": [
    "grass",
    "steel"
  ],
  "baseStats": {
    "hp": 44,
    "atk": 50,
    "def": 91,
    "atk_spe": 24,
    "def_spe": 86,
    "spd": 10
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
    "plant",
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 18.8,
  "baseExperience": 61,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:ferrothorn",
      "method": "level-up",
      "conditions": {
        "minLevel": 40,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default ferroseed;