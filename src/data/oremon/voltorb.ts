import { OremonData } from "../../types/OremonData";

const voltorb: OremonData = {
  "id": "oremon:voltorb",
  "name": "oremon.voltorb.name",
  "description": "oremon.voltorb.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 30,
    "def": 50,
    "atk_spe": 55,
    "def_spe": 55,
    "spd": 100
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
  "genderRate": -1,
  "catchRate": 190,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 10.4,
  "baseExperience": 66,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:electrode",
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
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "sonic-boom",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "thunderbolt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder-wave",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "screech",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "light-screen",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "light-screen",
      "method": "machine",
      "level": 0
    },
    {
      "id": "self-destruct",
      "method": "level_up",
      "level": 26
    },
    {
      "id": "swift",
      "method": "level_up",
      "level": 20
    },
    {
      "id": "explosion",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "explosion",
      "method": "machine",
      "level": 0
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
      "id": "thief",
      "method": "machine",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rollout",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "spark",
      "method": "level_up",
      "level": 9
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
      "id": "mirror-coat",
      "method": "level_up",
      "level": 48
    },
    {
      "id": "torment",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "charge",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "taunt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "gyro-ball",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "gyro-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "magnet-rise",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "discharge",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "charge-beam",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "charge-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "electro-ball",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "volt-switch",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wild-charge",
      "method": "machine",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "eerie-impulse",
      "method": "level_up",
      "level": 6
    }
  ]
};

export default voltorb;
