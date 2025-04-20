import { OremonData } from "../../types/OremonData";

const snorunt: OremonData = {
  "id": "oremon:snorunt",
  "name": "oremon.snorunt.name",
  "description": "oremon.snorunt.description",
  "types": [
    "ice"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 50,
    "def": 50,
    "atk_spe": 50,
    "def_spe": 50,
    "spd": 50
  },
  "evYield": {
    "hp": 1,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "fairy",
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 0.7,
  "weight": 16.8,
  "baseExperience": 60,
  "growthRateId": "medium",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Gray",
  "model": {
    "default": "models/entity/snorunt.geo.json"
  },
  "textures": {
    "default": "textures/entity/snorunt.png"
  },
  "evolutions": [
    {
      "into": "oremon:glalie",
      "method": "level-up",
      "conditions": {
        "minLevel": 42,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    },
    {
      "into": "oremon:froslass",
      "method": "use-item",
      "conditions": {
        "item": "item:109",
        "gender": "female",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default snorunt;