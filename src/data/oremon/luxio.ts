import { OremonData } from "../../types/OremonData";

const luxio: OremonData = {
  "id": "oremon:luxio",
  "name": "oremon.luxio.name",
  "description": "oremon.luxio.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 85,
    "def": 49,
    "atk_spe": 60,
    "def_spe": 49,
    "spd": 60
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
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.9,
  "weight": 30.5,
  "baseExperience": 127,
  "growthRateId": "medium-slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Blue",
  "model": {
    "default": "models/entity/luxio.geo.json"
  },
  "textures": {
    "default": "textures/entity/luxio.png"
  },
  "evolutions": [
    {
      "into": "oremon:luxray",
      "method": "level-up",
      "conditions": {
        "minLevel": 30,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default luxio;