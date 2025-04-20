import { OremonData } from "../../types/OremonData";

const chingling: OremonData = {
  "id": "oremon:chingling",
  "name": "oremon.chingling.name",
  "description": "oremon.chingling.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 30,
    "def": 50,
    "atk_spe": 65,
    "def_spe": 50,
    "spd": 45
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 25,
  "height": 0.2,
  "weight": 0.6,
  "baseExperience": 57,
  "growthRateId": "fast",
  "generationId": 4,
  "isBaby": true,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Yellow",
  "model": {
    "default": "models/entity/chingling.geo.json"
  },
  "textures": {
    "default": "textures/entity/chingling.png"
  },
  "evolutions": [
    {
      "into": "oremon:chimecho",
      "method": "level-up",
      "conditions": {
        "timeOfDay": "night",
        "minHappiness": 220,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default chingling;