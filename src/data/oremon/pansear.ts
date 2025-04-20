import { OremonData } from "../../types/OremonData";

const pansear: OremonData = {
  "id": "oremon:pansear",
  "name": "oremon.pansear.name",
  "description": "oremon.pansear.description",
  "types": [
    "fire"
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
  "weight": 11,
  "baseExperience": 63,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Red",
  "model": {
    "default": "models/entity/pansear.geo.json"
  },
  "textures": {
    "default": "textures/entity/pansear.png"
  },
  "evolutions": [
    {
      "into": "oremon:simisear",
      "method": "use-item",
      "conditions": {
        "item": "item:82",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default pansear;