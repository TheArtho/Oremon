import { OremonData } from "../../types/OremonData";

const kirlia: OremonData = {
  "id": "oremon:kirlia",
  "name": "oremon.kirlia.name",
  "description": "oremon.kirlia.description",
  "types": [
    "psychic",
    "fairy"
  ],
  "baseStats": {
    "hp": 38,
    "atk": 35,
    "def": 35,
    "atk_spe": 65,
    "def_spe": 55,
    "spd": 50
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 2,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 20,
  "height": 0.8,
  "weight": 20.2,
  "baseExperience": 97,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "White",
  "evolutions": [
    {
      "into": "oremon:gardevoir",
      "method": "level-up",
      "conditions": {
        "minLevel": 30,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    },
    {
      "into": "oremon:gallade",
      "method": "use-item",
      "conditions": {
        "item": "item:109",
        "gender": "male",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "growl",
      "method": "level_up",
      "level": 1
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
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "confusion",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "confusion",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "psychic",
      "method": "level_up",
      "level": 30
    },
    {
      "id": "psychic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hypnosis",
      "method": "level_up",
      "level": 44
    },
    {
      "id": "teleport",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "teleport",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "double-team",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "double-team",
      "method": "level_up",
      "level": 6
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "light-screen",
      "method": "machine",
      "level": 0
    },
    {
      "id": "reflect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dream-eater",
      "method": "level_up",
      "level": 47
    },
    {
      "id": "dream-eater",
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
      "id": "charm",
      "method": "level_up",
      "level": 40
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
      "id": "safeguard",
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
      "id": "sunny-day",
      "method": "machine",
      "level": 0
    },
    {
      "id": "psych-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "shadow-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "future-sight",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "torment",
      "method": "machine",
      "level": 0
    },
    {
      "id": "will-o-wisp",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "taunt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "imprison",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "magical-leaf",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "calm-mind",
      "method": "level_up",
      "level": 26
    },
    {
      "id": "calm-mind",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "lucky-chant",
      "method": "level_up",
      "level": 14
    },
    {
      "id": "trick-room",
      "method": "machine",
      "level": 0
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "charge-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "psyshock",
      "method": "machine",
      "level": 0
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
      "id": "stored-power",
      "method": "level_up",
      "level": 51
    },
    {
      "id": "heal-pulse",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "disarming-voice",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "draining-kiss",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dazzling-gleam",
      "method": "machine",
      "level": 0
    }
  ]
};

export default kirlia;
