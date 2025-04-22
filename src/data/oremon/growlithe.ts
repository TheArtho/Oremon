import { OremonData } from "../../types/OremonData";

const growlithe: OremonData = {
  "id": "oremon:growlithe",
  "name": "oremon.growlithe.name",
  "description": "oremon.growlithe.description",
  "types": [
    "fire"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 70,
    "def": 45,
    "atk_spe": 70,
    "def_spe": 50,
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
  "genderRate": 2,
  "catchRate": 190,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.7,
  "weight": 19,
  "baseExperience": 70,
  "growthRateId": "slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:arcanine",
      "method": "use-item",
      "conditions": {
        "item": "item:82",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default growlithe;