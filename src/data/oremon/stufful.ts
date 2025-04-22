import { OremonData } from "../../types/OremonData";

const stufful: OremonData = {
  "id": "oremon:stufful",
  "name": "oremon.stufful.name",
  "description": "oremon.stufful.description",
  "types": [
    "normal",
    "fighting"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 75,
    "def": 50,
    "atk_spe": 45,
    "def_spe": 50,
    "spd": 50
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
  "catchRate": 140,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 15,
  "height": 0.5,
  "weight": 6.8,
  "baseExperience": 68,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Pink",
  "evolutions": [
    {
      "into": "oremon:bewear",
      "method": "level-up",
      "conditions": {
        "minLevel": 27,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default stufful;