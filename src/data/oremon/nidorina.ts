import { OremonData } from "../../types/OremonData";

const nidorina: OremonData = {
  "id": "oremon:nidorina",
  "name": "oremon.nidorina.name",
  "description": "oremon.nidorina.description",
  "types": [
    "poison"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 62,
    "def": 67,
    "atk_spe": 55,
    "def_spe": 55,
    "spd": 56
  },
  "evYield": {
    "hp": 2,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 8,
  "catchRate": 120,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 20,
  "height": 0.8,
  "weight": 20,
  "baseExperience": 128,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:nidoqueen",
      "method": "use-item",
      "conditions": {
        "item": "item:81",
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
      "id": "double-kick",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "tail-whip",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "poison-sting",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "bite",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "growl",
      "method": "level_up",
      "level": 1
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
      "id": "thunderbolt",
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
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fury-swipes",
      "method": "level_up",
      "level": 20
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
      "id": "sludge-bomb",
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
      "id": "sunny-day",
      "method": "machine",
      "level": 0
    },
    {
      "id": "crunch",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "flatter",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "helping-hand",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "poison-fang",
      "method": "level_up",
      "level": 58
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic-spikes",
      "method": "level_up",
      "level": 35
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "shadow-claw",
      "method": "machine",
      "level": 0
    },
    {
      "id": "captivate",
      "method": "level_up",
      "level": 50
    },
    {
      "id": "venoshock",
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
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default nidorina;
