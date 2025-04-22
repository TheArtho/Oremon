import { OremonData } from "../../types/OremonData";

const sunkern: OremonData = {
  "id": "oremon:sunkern",
  "name": "oremon.sunkern.name",
  "description": "oremon.sunkern.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 30,
    "atk": 30,
    "def": 30,
    "atk_spe": 30,
    "def_spe": 30,
    "spd": 30
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 235,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.3,
  "weight": 1.8,
  "baseExperience": 36,
  "growthRateId": "medium-slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:sunflora",
      "method": "use-item",
      "conditions": {
        "item": "item:80",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default sunkern;