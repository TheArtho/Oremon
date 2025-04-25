import { OremonData } from "../../types/OremonData";

const cyndaquil: OremonData = {
  "id": "oremon:cyndaquil",
  "name": "oremon.cyndaquil.name",
  "description": "oremon.cyndaquil.description",
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
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 7.9,
  "baseExperience": 62,
  "growthRateId": "medium-slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:quilava",
      "method": "level-up",
      "conditions": {
        "minLevel": 14,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "double-kick",
      "method": "egg",
      "level": 0
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "thrash",
      "method": "egg",
      "level": 0
    },
    {
      "id": "double-edge",
      "method": "level_up",
      "level": 55
    },
    {
      "id": "double-edge",
      "method": "egg",
      "level": 0
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "ember",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "flamethrower",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "flamethrower",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "quick-attack",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "quick-attack",
      "method": "egg",
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
      "level": 6
    },
    {
      "id": "defense-curl",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "fire-blast",
      "method": "machine",
      "level": 0
    },
    {
      "id": "swift",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "fury-swipes",
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
      "id": "flame-wheel",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "reversal",
      "method": "egg",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "foresight",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rollout",
      "method": "level_up",
      "level": 49
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
      "id": "nature-power",
      "method": "egg",
      "level": 0
    },
    {
      "id": "nature-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "eruption",
      "method": "level_up",
      "level": 64
    },
    {
      "id": "crush-claw",
      "method": "egg",
      "level": 0
    },
    {
      "id": "overheat",
      "method": "machine",
      "level": 0
    },
    {
      "id": "extrasensory",
      "method": "egg",
      "level": 0
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "howl",
      "method": "egg",
      "level": 0
    },
    {
      "id": "covet",
      "method": "egg",
      "level": 0
    },
    {
      "id": "flare-blitz",
      "method": "egg",
      "level": 0
    },
    {
      "id": "lava-plume",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "flame-burst",
      "method": "egg",
      "level": 0
    },
    {
      "id": "flame-charge",
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
      "id": "burn-up",
      "method": "level_up",
      "level": 58
    }
  ]
};

export default cyndaquil;
