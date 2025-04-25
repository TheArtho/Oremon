import { OremonData } from "../../types/OremonData";

const panpour: OremonData = {
  "id": "oremon:panpour",
  "name": "oremon.panpour.name",
  "description": "oremon.panpour.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 53,
    "def": 48,
    "atk_spe": 53,
    "def_spe": 48,
    "spd": 64
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
  "catchRate": 190,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 13.5,
  "baseExperience": 63,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:simipour",
      "method": "use-item",
      "conditions": {
        "item": "item:84",
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
      "id": "leer",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "bite",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "water-gun",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "hydro-pump",
      "method": "egg",
      "level": 0
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
      "id": "low-kick",
      "method": "egg",
      "level": 0
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
      "id": "lick",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "waterfall",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fury-swipes",
      "method": "level_up",
      "level": 13
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
      "id": "rain-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "crunch",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "hail",
      "method": "machine",
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
      "method": "level_up",
      "level": 25
    },
    {
      "id": "taunt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "role-play",
      "method": "egg",
      "level": 0
    },
    {
      "id": "recycle",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "mud-sport",
      "method": "egg",
      "level": 0
    },
    {
      "id": "astonish",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "tickle",
      "method": "egg",
      "level": 0
    },
    {
      "id": "covet",
      "method": "egg",
      "level": 0
    },
    {
      "id": "water-sport",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "brine",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "natural-gift",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fling",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "aqua-ring",
      "method": "egg",
      "level": 0
    },
    {
      "id": "aqua-tail",
      "method": "egg",
      "level": 0
    },
    {
      "id": "nasty-plot",
      "method": "egg",
      "level": 0
    },
    {
      "id": "shadow-claw",
      "method": "machine",
      "level": 0
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "low-sweep",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "scald",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "scald",
      "method": "machine",
      "level": 0
    },
    {
      "id": "acrobatics",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "acrobatics",
      "method": "machine",
      "level": 0
    },
    {
      "id": "water-pledge",
      "method": "tutor",
      "level": 0
    },
    {
      "id": "work-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "disarming-voice",
      "method": "egg",
      "level": 0
    },
    {
      "id": "play-nice",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default panpour;
