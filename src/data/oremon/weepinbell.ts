import { OremonData } from "../../types/OremonData";

const weepinbell: OremonData = {
  "id": "oremon:weepinbell",
  "name": "oremon.weepinbell.name",
  "description": "oremon.weepinbell.description",
  "types": [
    "grass",
    "poison"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 90,
    "def": 50,
    "atk_spe": 85,
    "def_spe": 45,
    "spd": 55
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
  "catchRate": 120,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 6.4,
  "baseExperience": 137,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:victreebel",
      "method": "use-item",
      "conditions": {
        "item": "item:85",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default weepinbell;