import { OremonData } from "../../types/OremonData";

const taillow: OremonData = {
  "id": "oremon:taillow",
  "name": "oremon.taillow.name",
  "description": "oremon.taillow.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 55,
    "def": 30,
    "atk_spe": 30,
    "def_spe": 30,
    "spd": 85
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
  "genderRate": 4,
  "catchRate": 200,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 15,
  "height": 0.3,
  "weight": 2.3,
  "baseExperience": 54,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:swellow",
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
      "id": "wing-attack",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "whirlwind",
      "method": "egg",
      "level": 0
    },
    {
      "id": "fly",
      "method": "machine",
      "level": 0
    },
    {
      "id": "growl",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "supersonic",
      "method": "egg",
      "level": 0
    },
    {
      "id": "peck",
      "method": "level_up",
      "level": 1
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
      "id": "quick-attack",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "rage",
      "method": "egg",
      "level": 0
    },
    {
      "id": "double-team",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "focus-energy",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "mirror-move",
      "method": "egg",
      "level": 0
    },
    {
      "id": "sky-attack",
      "method": "egg",
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
      "id": "reversal",
      "method": "level_up",
      "level": 45
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "steel-wing",
      "method": "egg",
      "level": 0
    },
    {
      "id": "steel-wing",
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
      "id": "endeavor",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "refresh",
      "method": "egg",
      "level": 0
    },
    {
      "id": "aerial-ace",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "roost",
      "method": "egg",
      "level": 0
    },
    {
      "id": "roost",
      "method": "machine",
      "level": 0
    },
    {
      "id": "u-turn",
      "method": "machine",
      "level": 0
    },
    {
      "id": "air-slash",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "brave-bird",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "brave-bird",
      "method": "egg",
      "level": 0
    },
    {
      "id": "defog",
      "method": "egg",
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
      "id": "quick-guard",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "work-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hurricane",
      "method": "egg",
      "level": 0
    },
    {
      "id": "boomburst",
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

export default taillow;
