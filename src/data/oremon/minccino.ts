import { OremonData } from "../../types/OremonData";

const minccino: OremonData = {
  "id": "oremon:minccino",
  "name": "oremon.minccino.name",
  "description": "oremon.minccino.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 50,
    "def": 40,
    "atk_spe": 40,
    "def_spe": 40,
    "spd": 75
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
  "catchRate": 255,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 15,
  "height": 0.4,
  "weight": 5.8,
  "baseExperience": 60,
  "growthRateId": "fast",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:cinccino",
      "method": "use-item",
      "conditions": {
        "item": "item:107",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default minccino;