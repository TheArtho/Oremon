import { OremonData } from "../../types/OremonData";

const magnemite: OremonData = {
  "id": "oremon:magnemite",
  "name": "oremon.magnemite.name",
  "description": "oremon.magnemite.description",
  "types": [
    "electric",
    "steel"
  ],
  "baseStats": {
    "hp": 25,
    "atk": 35,
    "def": 70,
    "atk_spe": 95,
    "def_spe": 55,
    "spd": 45
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
  "genderRate": -1,
  "catchRate": 190,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 0.3,
  "weight": 6,
  "baseExperience": 65,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:magneton",
      "method": "level-up",
      "conditions": {
        "minLevel": 30,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default magnemite;