import { OremonData } from "../../types/OremonData";

const goomy: OremonData = {
  "id": "oremon:goomy",
  "name": "oremon.goomy.name",
  "description": "oremon.goomy.description",
  "types": [
    "dragon"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 50,
    "def": 35,
    "atk_spe": 55,
    "def_spe": 75,
    "spd": 40
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 0.3,
  "weight": 2.8,
  "baseExperience": 60,
  "growthRateId": "slow",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Purple",
  "evolutions": [
    {
      "into": "oremon:sliggoo",
      "method": "level-up",
      "conditions": {
        "minLevel": 40,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default goomy;