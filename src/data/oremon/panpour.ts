import { OremonData } from "../../types/OremonData";

const panpour: OremonData = {
  "id": "oremon:panpour",
  "name": "oremon.panpour.name",
  "description": "oremon.panpour.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 53,
    "def": 48,
    "atk_spe": 53,
    "def_spe": 48,
    "spd": 64
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 190,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 13.5,
  "baseExperience": 63,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:simipour",
      "method": "use-item",
      "conditions": {
        "item": "item:84",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default panpour;