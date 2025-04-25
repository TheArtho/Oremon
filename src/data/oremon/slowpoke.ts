import { OremonData } from "../../types/OremonData";

const slowpoke: OremonData = {
  "id": "oremon:slowpoke",
  "name": "oremon.slowpoke.name",
  "description": "oremon.slowpoke.description",
  "types": [
    "water",
    "psychic"
  ],
  "baseStats": {
    "hp": 90,
    "atk": 65,
    "def": 65,
    "atk_spe": 40,
    "def_spe": 40,
    "spd": 15
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
    "monster",
    "water1"
  ],
  "hatchCounter": 20,
  "height": 1.2,
  "weight": 36,
  "baseExperience": 63,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Pink",
  "evolutions": [
    {
      "into": "oremon:slowbro",
      "method": "level-up",
      "conditions": {
        "minLevel": 37,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    },
    {
      "into": "oremon:slowking",
      "method": "trade",
      "conditions": {
        "heldItem": "item:198",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "stomp",
      "method": "egg",
      "level": 0
    },
    {
      "id": "headbutt",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "growl",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "disable",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "flamethrower",
      "method": "machine",
      "level": 0
    },
    {
      "id": "water-gun",
      "method": "level_up",
      "level": 9
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
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder-wave",
      "method": "machine",
      "level": 0
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
      "id": "confusion",
      "method": "level_up",
      "level": 14
    },
    {
      "id": "psychic",
      "method": "level_up",
      "level": 45
    },
    {
      "id": "psychic",
      "method": "machine",
      "level": 0
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
      "id": "fire-blast",
      "method": "machine",
      "level": 0
    },
    {
      "id": "amnesia",
      "method": "level_up",
      "level": 41
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
      "id": "snore",
      "method": "egg",
      "level": 0
    },
    {
      "id": "curse",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "belly-drum",
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
      "method": "egg",
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
      "method": "level_up",
      "level": 49
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
      "method": "level_up",
      "level": 54
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
      "id": "yawn",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "mud-sport",
      "method": "egg",
      "level": 0
    },
    {
      "id": "slack-off",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "block",
      "method": "egg",
      "level": 0
    },
    {
      "id": "calm-mind",
      "method": "machine",
      "level": 0
    },
    {
      "id": "water-pulse",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "me-first",
      "method": "egg",
      "level": 0
    },
    {
      "id": "zen-headbutt",
      "method": "level_up",
      "level": 32
    },
    {
      "id": "zen-headbutt",
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
      "id": "wonder-room",
      "method": "egg",
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
      "id": "scald",
      "method": "machine",
      "level": 0
    },
    {
      "id": "heal-pulse",
      "method": "level_up",
      "level": 58
    },
    {
      "id": "bulldoze",
      "method": "machine",
      "level": 0
    },
    {
      "id": "belch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default slowpoke;
