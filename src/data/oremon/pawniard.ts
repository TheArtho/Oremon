import { OremonData } from "../../types/OremonData";

const pawniard: OremonData = {
  "id": "oremon:pawniard",
  "name": "oremon.pawniard.name",
  "description": "oremon.pawniard.description",
  "types": [
    "dark",
    "steel"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 85,
    "def": 70,
    "atk_spe": 40,
    "def_spe": 40,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "humanshape"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 10.2,
  "baseExperience": 68,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:bisharp",
      "method": "level-up",
      "conditions": {
        "minLevel": 52,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default pawniard;