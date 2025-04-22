import { OremonData } from "../../types/OremonData";

const nidorino: OremonData = {
  "id": "oremon:nidorino",
  "name": "oremon.nidorino.name",
  "description": "oremon.nidorino.description",
  "types": [
    "poison"
  ],
  "baseStats": {
    "hp": 61,
    "atk": 72,
    "def": 57,
    "atk_spe": 55,
    "def_spe": 55,
    "spd": 65
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 0,
  "catchRate": 120,
  "eggGroups": [
    "monster",
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.9,
  "weight": 19.5,
  "baseExperience": 128,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Purple",
  "evolutions": [
    {
      "into": "oremon:nidoking",
      "method": "use-item",
      "conditions": {
        "item": "item:81",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default nidorino;