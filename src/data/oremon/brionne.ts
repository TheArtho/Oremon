import { OremonData } from "../../types/OremonData";

const brionne: OremonData = {
  "id": "oremon:brionne",
  "name": "oremon.brionne.name",
  "description": "oremon.brionne.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 69,
    "def": 69,
    "atk_spe": 91,
    "def_spe": 81,
    "spd": 50
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 2,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "water1",
    "ground"
  ],
  "hatchCounter": 15,
  "height": 0.6,
  "weight": 17.5,
  "baseExperience": 147,
  "growthRateId": "medium-slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "fish",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:primarina",
      "method": "level-up",
      "conditions": {
        "minLevel": 34,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default brionne;