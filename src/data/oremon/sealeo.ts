import { OremonData } from "../../types/OremonData";

const sealeo: OremonData = {
  "id": "oremon:sealeo",
  "name": "oremon.sealeo.name",
  "description": "oremon.sealeo.description",
  "types": [
    "ice",
    "water"
  ],
  "baseStats": {
    "hp": 90,
    "atk": 60,
    "def": 70,
    "atk_spe": 75,
    "def_spe": 70,
    "spd": 45
  },
  "evYield": {
    "hp": 2,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "water1",
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1.1,
  "weight": 87.6,
  "baseExperience": 144,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "fish",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:walrein",
      "method": "level-up",
      "conditions": {
        "minLevel": 44,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "body-slam",
      "method": "level_up",
      "level": 26
    },
    {
      "id": "growl",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "roar",
      "method": "machine",
      "level": 0
    },
    {
      "id": "water-gun",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "surf",
      "method": "machine",
      "level": 0
    },
    {
      "id": "ice-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "blizzard",
      "method": "level_up",
      "level": 45
    },
    {
      "id": "blizzard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "aurora-beam",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "earthquake",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "defense-curl",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "waterfall",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rest",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "rest",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-slide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "substitute",
      "method": "machine",
      "level": 0
    },
    {
      "id": "snore",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "powder-snow",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rollout",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "swagger",
      "method": "level_up",
      "level": 0
    },
    {
      "id": "swagger",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "attract",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sleep-talk",
      "method": "machine",
      "level": 0
    },
    {
      "id": "return",
      "method": "machine",
      "level": 0
    },
    {
      "id": "frustration",
      "method": "machine",
      "level": 0
    },
    {
      "id": "encore",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "hidden-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rain-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hail",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "hail",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "ice-ball",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sheer-cold",
      "method": "level_up",
      "level": 52
    },
    {
      "id": "brine",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "echoed-voice",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bulldoze",
      "method": "machine",
      "level": 0
    },
    {
      "id": "frost-breath",
      "method": "machine",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default sealeo;
