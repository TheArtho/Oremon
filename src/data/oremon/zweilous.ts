import { OremonData } from "../../types/OremonData";

const zweilous: OremonData = {
  "id": "oremon:zweilous",
  "name": "oremon.zweilous.name",
  "description": "oremon.zweilous.description",
  "types": [
    "dark",
    "dragon"
  ],
  "baseStats": {
    "hp": 72,
    "atk": 85,
    "def": 70,
    "atk_spe": 65,
    "def_spe": 70,
    "spd": 58
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
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 1.4,
  "weight": 50,
  "baseExperience": 147,
  "growthRateId": "slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:hydreigon",
      "method": "level-up",
      "conditions": {
        "minLevel": 64,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default zweilous;