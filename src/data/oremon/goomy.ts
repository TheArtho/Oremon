import { OremonData } from "../../types/OremonData";

const goomy: OremonData = {
  "id": "oremon:goomy",
  "name": "oremon.goomy.name",
  "description": "oremon.goomy.description",
  "types": [
    "dragon"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 50,
    "def": 35,
    "atk_spe": 55,
    "def_spe": 75,
    "spd": 40
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 0.3,
  "weight": 2.8,
  "baseExperience": 60,
  "growthRateId": "slow",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Purple",
  "evolutions": [
    {
      "into": "oremon:sliggoo",
      "method": "level-up",
      "conditions": {
        "minLevel": 40,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "body-slam",
      "method": "level_up",
      "level": 32
    },
    {
      "id": "counter",
      "method": "egg",
      "level": 0
    },
    {
      "id": "absorb",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "thunderbolt",
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
      "id": "bide",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "bubble",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "acid-armor",
      "method": "egg",
      "level": 0
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
      "id": "curse",
      "method": "egg",
      "level": 0
    },
    {
      "id": "flail",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "protect",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sludge-bomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "endure",
      "method": "egg",
      "level": 0
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
      "id": "dragon-breath",
      "method": "level_up",
      "level": 18
    },
    {
      "id": "iron-tail",
      "method": "egg",
      "level": 0
    },
    {
      "id": "hidden-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rain-dance",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "rain-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sunny-day",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "muddy-water",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "poison-tail",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dragon-pulse",
      "method": "level_up",
      "level": 42
    },
    {
      "id": "draco-meteor",
      "method": "tutor",
      "level": 0
    },
    {
      "id": "sludge-wave",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "infestation",
      "method": "machine",
      "level": 0
    }
  ]
};

export default goomy;
