import { OremonData } from "../../types/OremonData";

const charmander: OremonData = {
  "id": "oremon:charmander",
  "name": "oremon.charmander.name",
  "description": "oremon.charmander.description",
  "types": [
    "fire"
  ],
  "baseStats": {
    "hp": 39,
    "atk": 52,
    "def": 43,
    "atk_spe": 60,
    "def_spe": 50,
    "spd": 65
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
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "monster",
    "dragon"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 8.5,
  "baseExperience": 62,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:charmeleon",
      "method": "level-up",
      "conditions": {
        "minLevel": 16,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "scratch",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "swords-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bite",
      "method": "egg",
      "level": 0
    },
    {
      "id": "growl",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "ember",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "flamethrower",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "flamethrower",
      "method": "machine",
      "level": 0
    },
    {
      "id": "counter",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dragon-rage",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "fire-spin",
      "method": "level_up",
      "level": 43
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
      "id": "smokescreen",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "fire-blast",
      "method": "machine",
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
      "id": "slash",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "substitute",
      "method": "machine",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "scary-face",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "belly-drum",
      "method": "egg",
      "level": 0
    },
    {
      "id": "outrage",
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
      "id": "metal-claw",
      "method": "egg",
      "level": 0
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
      "id": "crunch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "ancient-power",
      "method": "egg",
      "level": 0
    },
    {
      "id": "beat-up",
      "method": "egg",
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
      "id": "focus-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "air-cutter",
      "method": "egg",
      "level": 0
    },
    {
      "id": "overheat",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dragon-claw",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dragon-dance",
      "method": "egg",
      "level": 0
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "flare-blitz",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dragon-pulse",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dragon-rush",
      "method": "egg",
      "level": 0
    },
    {
      "id": "shadow-claw",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fire-fang",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "flame-burst",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "flame-charge",
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
      "id": "inferno",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "fire-pledge",
      "method": "tutor",
      "level": 0
    },
    {
      "id": "work-up",
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

export default charmander;
