import { OremonData } from "../../types/OremonData";

const mime_jr: OremonData = {
  "id": "oremon:mime-jr",
  "name": "oremon.mime-jr.name",
  "description": "oremon.mime-jr.description",
  "types": [
    "psychic",
    "fairy"
  ],
  "baseStats": {
    "hp": 20,
    "atk": 25,
    "def": 45,
    "atk_spe": 70,
    "def_spe": 90,
    "spd": 60
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
  "catchRate": 145,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 25,
  "height": 0.6,
  "weight": 13,
  "baseExperience": 62,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": true,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Pink",
  "evolutions": [
    {
      "into": "oremon:mr-mime",
      "method": "level-up",
      "conditions": {
        "knownMove": "move:102",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "pound",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "double-slap",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "psybeam",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
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
      "id": "confusion",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "psychic",
      "method": "level_up",
      "level": 39
    },
    {
      "id": "psychic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hypnosis",
      "method": "egg",
      "level": 0
    },
    {
      "id": "meditate",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "mimic",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "mimic",
      "method": "egg",
      "level": 0
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "confuse-ray",
      "method": "egg",
      "level": 0
    },
    {
      "id": "barrier",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "light-screen",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "light-screen",
      "method": "machine",
      "level": 0
    },
    {
      "id": "reflect",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "reflect",
      "method": "machine",
      "level": 0
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
      "method": "level_up",
      "level": 29
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
      "id": "icy-wind",
      "method": "egg",
      "level": 0
    },
    {
      "id": "charm",
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
      "id": "safeguard",
      "method": "level_up",
      "level": 50
    },
    {
      "id": "safeguard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "baton-pass",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "encore",
      "method": "level_up",
      "level": 18
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
      "method": "egg",
      "level": 0
    },
    {
      "id": "fake-out",
      "method": "egg",
      "level": 0
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
      "id": "taunt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "trick",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "trick",
      "method": "egg",
      "level": 0
    },
    {
      "id": "role-play",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "recycle",
      "method": "level_up",
      "level": 32
    },
    {
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "teeter-dance",
      "method": "egg",
      "level": 0
    },
    {
      "id": "tickle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "calm-mind",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wake-up-slap",
      "method": "egg",
      "level": 0
    },
    {
      "id": "healing-wish",
      "method": "egg",
      "level": 0
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "copycat",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "nasty-plot",
      "method": "egg",
      "level": 0
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
      "id": "power-split",
      "method": "egg",
      "level": 0
    },
    {
      "id": "psyshock",
      "method": "machine",
      "level": 0
    },
    {
      "id": "magic-room",
      "method": "egg",
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
    },
    {
      "id": "psychic-terrain",
      "method": "egg",
      "level": 0
    }
  ]
};

export default mime_jr;
