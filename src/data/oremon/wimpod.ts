import { OremonData } from "../../types/OremonData";

const wimpod: OremonData = {
  "id": "oremon:wimpod",
  "name": "oremon.wimpod.name",
  "description": "oremon.wimpod.description",
  "types": [
    "bug",
    "water"
  ],
  "baseStats": {
    "hp": 25,
    "atk": 35,
    "def": 40,
    "atk_spe": 20,
    "def_spe": 30,
    "spd": 80
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
  "genderRate": 4,
  "catchRate": 90,
  "eggGroups": [
    "bug",
    "water3"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 12,
  "baseExperience": 46,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "tentacles",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:golisopod",
      "method": "level-up",
      "conditions": {
        "minLevel": 30,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default wimpod;