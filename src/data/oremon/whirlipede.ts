import { OremonData } from "../../types/OremonData";

const whirlipede: OremonData = {
  "id": "oremon:whirlipede",
  "name": "oremon.whirlipede.name",
  "description": "oremon.whirlipede.description",
  "types": [
    "bug",
    "poison"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 55,
    "def": 99,
    "atk_spe": 40,
    "def_spe": 79,
    "spd": 47
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 2,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 15,
  "height": 1.2,
  "weight": 58.5,
  "baseExperience": 126,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:scolipede",
      "method": "level-up",
      "conditions": {
        "minLevel": 30,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "double-edge",
      "method": "level_up",
      "level": 50
    },
    {
      "id": "poison-sting",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "poison-sting",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "agility",
      "method": "level_up",
      "level": 32
    },
    {
      "id": "screech",
      "method": "level_up",
      "level": 1
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
      "id": "iron-defense",
      "method": "level_up",
      "level": 0
    },
    {
      "id": "iron-defense",
      "method": "level_up",
      "level": 1
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
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-climb",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "bug-bite",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "venoshock",
      "method": "level_up",
      "level": 28
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
      "level": 37
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "venom-drench",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "infestation",
      "method": "machine",
      "level": 0
    }
  ]
};

export default whirlipede;
