import { OremonData } from "../../types/OremonData";

const swablu: OremonData = {
  "id": "oremon:swablu",
  "name": "oremon.swablu.name",
  "description": "oremon.swablu.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 40,
    "def": 60,
    "atk_spe": 40,
    "def_spe": 75,
    "spd": 50
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
  "catchRate": 255,
  "eggGroups": [
    "flying",
    "dragon"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 1.2,
  "baseExperience": 62,
  "growthRateId": "slow-then-very-fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:altaria",
      "method": "level-up",
      "conditions": {
        "minLevel": 35,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "fly",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fury-attack",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "take-down",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "growl",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "sing",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "mist",
      "method": "level_up",
      "level": 14
    },
    {
      "id": "ice-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "peck",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "agility",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rage",
      "method": "egg",
      "level": 0
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "haze",
      "method": "egg",
      "level": 0
    },
    {
      "id": "mirror-move",
      "method": "level_up",
      "level": 30
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
      "id": "perish-song",
      "method": "level_up",
      "level": 42
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
      "id": "safeguard",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "safeguard",
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
      "id": "psych-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "refresh",
      "method": "level_up",
      "level": 26
    },
    {
      "id": "feather-dance",
      "method": "egg",
      "level": 0
    },
    {
      "id": "hyper-voice",
      "method": "egg",
      "level": 0
    },
    {
      "id": "astonish",
      "method": "level_up",
      "level": 3
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
      "id": "natural-gift",
      "method": "level_up",
      "level": 20
    },
    {
      "id": "power-swap",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dragon-pulse",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "dragon-rush",
      "method": "egg",
      "level": 0
    },
    {
      "id": "round",
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
      "id": "cotton-guard",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "disarming-voice",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "play-rough",
      "method": "egg",
      "level": 0
    },
    {
      "id": "moonblast",
      "method": "level_up",
      "level": 46
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

export default swablu;
