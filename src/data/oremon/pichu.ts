import { OremonData } from "../../types/OremonData";

const pichu: OremonData = {
  "id": "oremon:pichu",
  "name": "oremon.pichu.name",
  "description": "oremon.pichu.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 20,
    "atk": 40,
    "def": 15,
    "atk_spe": 35,
    "def_spe": 35,
    "spd": 60
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
    "no-eggs"
  ],
  "hatchCounter": 10,
  "height": 0.3,
  "weight": 2,
  "baseExperience": 41,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": true,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:pikachu",
      "method": "level-up",
      "conditions": {
        "minHappiness": 220,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default pichu;