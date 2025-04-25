import { OremonData } from "../../types/OremonData";

const venipede: OremonData = {
  "id": "oremon:venipede",
  "name": "oremon.venipede.name",
  "description": "oremon.venipede.description",
  "types": [
    "bug",
    "poison"
  ],
  "baseStats": {
    "hp": 30,
    "atk": 45,
    "def": 59,
    "atk_spe": 30,
    "def_spe": 39,
    "spd": 57
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
  "height": 0.4,
  "weight": 5.3,
  "baseExperience": 52,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:whirlipede",
      "method": "level-up",
      "conditions": {
        "minLevel": 22,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "take-down",
      "method": "egg",
      "level": 0
    },
    {
      "id": "double-edge",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "poison-sting",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "twineedle",
      "method": "egg",
      "level": 0
    },
    {
      "id": "pin-missile",
      "method": "egg",
      "level": 0
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "agility",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "screech",
      "method": "level_up",
      "level": 8
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
      "id": "rest",
      "method": "machine",
      "level": 0
    },
    {
      "id": "substitute",
      "method": "machine",
      "level": 0
    },
    {
      "id": "protect",
      "method": "level_up",
      "level": 15
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
      "id": "spikes",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rollout",
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
      "id": "pursuit",
      "method": "level_up",
      "level": 12
    },
    {
      "id": "hidden-power",
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
      "id": "poison-tail",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "gyro-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic-spikes",
      "method": "egg",
      "level": 0
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-climb",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "rock-climb",
      "method": "egg",
      "level": 0
    },
    {
      "id": "bug-bite",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "venoshock",
      "method": "level_up",
      "level": 26
    },
    {
      "id": "venoshock",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "steamroller",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "venom-drench",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "infestation",
      "method": "machine",
      "level": 0
    }
  ]
};

export default venipede;
