import { OremonData } from "../../types/OremonData";

const spinarak: OremonData = {
  "id": "oremon:spinarak",
  "name": "oremon.spinarak.name",
  "description": "oremon.spinarak.description",
  "types": [
    "bug",
    "poison"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 60,
    "def": 40,
    "atk_spe": 40,
    "def_spe": 40,
    "spd": 30
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
  "catchRate": 255,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 15,
  "height": 0.5,
  "weight": 8.5,
  "baseExperience": 50,
  "growthRateId": "fast",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:ariados",
      "method": "level-up",
      "conditions": {
        "minLevel": 22,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default spinarak;