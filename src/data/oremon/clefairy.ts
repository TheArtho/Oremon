import { OremonData } from "../../types/OremonData";

const clefairy: OremonData = {
  "id": "oremon:clefairy",
  "name": "oremon.clefairy.name",
  "description": "oremon.clefairy.description",
  "types": [
    "fairy"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 45,
    "def": 48,
    "atk_spe": 60,
    "def_spe": 65,
    "spd": 35
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
  "genderRate": 6,
  "catchRate": 150,
  "eggGroups": [
    "fairy"
  ],
  "hatchCounter": 10,
  "height": 0.6,
  "weight": 7.5,
  "baseExperience": 113,
  "growthRateId": "fast",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Pink",
  "evolutions": [
    {
      "into": "oremon:clefable",
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
      "id": "pound",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "double-slap",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "body-slam",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "growl",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "sing",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "flamethrower",
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
      "id": "minimize",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "defense-curl",
      "method": "level_up",
      "level": 13
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
      "id": "metronome",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "fire-blast",
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
      "id": "safeguard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "encore",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "moonlight",
      "method": "level_up",
      "level": 43
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
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "follow-me",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "meteor-mash",
      "method": "level_up",
      "level": 50
    },
    {
      "id": "cosmic-power",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "calm-mind",
      "method": "machine",
      "level": 0
    },
    {
      "id": "gravity",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "wake-up-slap",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "healing-wish",
      "method": "level_up",
      "level": 55
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "lucky-chant",
      "method": "level_up",
      "level": 37
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
      "id": "after-you",
      "method": "level_up",
      "level": 58
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
      "level": 28
    },
    {
      "id": "bestow",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "work-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "disarming-voice",
      "method": "level_up",
      "level": 1
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
    },
    {
      "id": "spotlight",
      "method": "level_up",
      "level": 1
    }
  ]
};

export default clefairy;
