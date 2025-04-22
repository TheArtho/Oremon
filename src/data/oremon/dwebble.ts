import { OremonData } from "../../types/OremonData";

const dwebble: OremonData = {
  "id": "oremon:dwebble",
  "name": "oremon.dwebble.name",
  "description": "oremon.dwebble.description",
  "types": [
    "bug",
    "rock"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 65,
    "def": 85,
    "atk_spe": 35,
    "def_spe": 35,
    "spd": 55
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
  "catchRate": 190,
  "eggGroups": [
    "bug",
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 0.3,
  "weight": 14.5,
  "baseExperience": 65,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:crustle",
      "method": "level-up",
      "conditions": {
        "minLevel": 34,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default dwebble;