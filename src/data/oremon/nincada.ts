import { OremonData } from "../../types/OremonData";

const nincada: OremonData = {
  "id": "oremon:nincada",
  "name": "oremon.nincada.name",
  "description": "oremon.nincada.description",
  "types": [
    "bug",
    "ground"
  ],
  "baseStats": {
    "hp": 31,
    "atk": 45,
    "def": 90,
    "atk_spe": 30,
    "def_spe": 30,
    "spd": 40
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
  "catchRate": 255,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 15,
  "height": 0.5,
  "weight": 5.5,
  "baseExperience": 53,
  "growthRateId": "slow-then-very-fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:ninjask",
      "method": "level-up",
      "conditions": {
        "minLevel": 20,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    },
    {
      "into": "oremon:shedinja",
      "method": "shed",
      "conditions": {
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default nincada;