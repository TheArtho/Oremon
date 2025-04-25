import { OremonData } from "../../types/OremonData";

const zorua: OremonData = {
  "id": "oremon:zorua",
  "name": "oremon.zorua.name",
  "description": "oremon.zorua.description",
  "types": [
    "dark"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 65,
    "def": 40,
    "atk_spe": 80,
    "def_spe": 40,
    "spd": 65
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 75,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 25,
  "height": 0.7,
  "weight": 12.5,
  "baseExperience": 66,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:zoroark",
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
      "id": "leer",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "roar",
      "method": "machine",
      "level": 0
    },
    {
      "id": "counter",
      "method": "egg",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "agility",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "double-team",
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
      "id": "scary-face",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "feint-attack",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "detect",
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
      "id": "pursuit",
      "method": "level_up",
      "level": 5
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
      "id": "torment",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "torment",
      "method": "machine",
      "level": 0
    },
    {
      "id": "memento",
      "method": "egg",
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
      "id": "imprison",
      "method": "level_up",
      "level": 53
    },
    {
      "id": "snatch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "fake-tears",
      "method": "level_up",
      "level": 9
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
      "id": "calm-mind",
      "method": "machine",
      "level": 0
    },
    {
      "id": "u-turn",
      "method": "machine",
      "level": 0
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "embargo",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "embargo",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "copycat",
      "method": "egg",
      "level": 0
    },
    {
      "id": "punishment",
      "method": "level_up",
      "level": 45
    },
    {
      "id": "sucker-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dark-pulse",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dark-pulse",
      "method": "machine",
      "level": 0
    },
    {
      "id": "nasty-plot",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "captivate",
      "method": "egg",
      "level": 0
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "foul-play",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "night-daze",
      "method": "level_up",
      "level": 57
    },
    {
      "id": "snarl",
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

export default zorua;
