import { OremonData } from "../../types/OremonData";

const jangmo_o: OremonData = {
  "id": "oremon:jangmo-o",
  "name": "oremon.jangmo-o.name",
  "description": "oremon.jangmo-o.description",
  "types": [
    "dragon"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 55,
    "def": 65,
    "atk_spe": 45,
    "def_spe": 45,
    "spd": 45
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
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 0.6,
  "weight": 29.7,
  "baseExperience": 60,
  "growthRateId": "slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:hakamo-o",
      "method": "level-up",
      "conditions": {
        "minLevel": 35,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default jangmo_o;