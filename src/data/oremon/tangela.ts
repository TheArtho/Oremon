import { OremonData } from "../../types/OremonData";

const tangela: OremonData = {
  "id": "oremon:tangela",
  "name": "oremon.tangela.name",
  "description": "oremon.tangela.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 55,
    "def": 115,
    "atk_spe": 100,
    "def_spe": 40,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 35,
  "baseExperience": 87,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "legs",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:tangrowth",
      "method": "level-up",
      "conditions": {
        "knownMove": "move:246",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default tangela;