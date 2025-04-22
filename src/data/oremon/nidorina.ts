import { OremonData } from "../../types/OremonData";

const nidorina: OremonData = {
  "id": "oremon:nidorina",
  "name": "oremon.nidorina.name",
  "description": "oremon.nidorina.description",
  "types": [
    "poison"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 62,
    "def": 67,
    "atk_spe": 55,
    "def_spe": 55,
    "spd": 56
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
  "genderRate": 8,
  "catchRate": 120,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 20,
  "height": 0.8,
  "weight": 20,
  "baseExperience": 128,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:nidoqueen",
      "method": "use-item",
      "conditions": {
        "item": "item:81",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default nidorina;