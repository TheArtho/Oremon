import { OremonData } from "../../types/OremonData";

const doublade: OremonData = {
  "id": "oremon:doublade",
  "name": "oremon.doublade.name",
  "description": "oremon.doublade.description",
  "types": [
    "steel",
    "ghost"
  ],
  "baseStats": {
    "hp": 59,
    "atk": 110,
    "def": 150,
    "atk_spe": 45,
    "def_spe": 49,
    "spd": 35
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 2,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 90,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 0.8,
  "weight": 4.5,
  "baseExperience": 157,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "heads",
  "color": "Brown",
  "model": {
    "default": "models/entity/doublade.geo.json"
  },
  "textures": {
    "default": "textures/entity/doublade.png"
  },
  "evolutions": [
    {
      "into": "oremon:aegislash",
      "method": "use-item",
      "conditions": {
        "item": "item:108",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default doublade;