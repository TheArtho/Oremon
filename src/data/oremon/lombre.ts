import { OremonData } from "../../types/OremonData";

const lombre: OremonData = {
  "id": "oremon:lombre",
  "name": "oremon.lombre.name",
  "description": "oremon.lombre.description",
  "types": [
    "water",
    "grass"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 50,
    "def": 50,
    "atk_spe": 60,
    "def_spe": 70,
    "spd": 50
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 2,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "water1",
    "plant"
  ],
  "hatchCounter": 15,
  "height": 1.2,
  "weight": 32.5,
  "baseExperience": 119,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:ludicolo",
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
      "id": "swords-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "growl",
      "method": "level_up",
      "level": 3
    },
    {
      "id": "hydro-pump",
      "method": "level_up",
      "level": 44
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
      "id": "bubble-beam",
      "method": "level_up",
      "level": 24
    },
    {
      "id": "absorb",
      "method": "level_up",
      "level": 6
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
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "waterfall",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bubble",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "fury-swipes",
      "method": "level_up",
      "level": 12
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
      "id": "sunny-day",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fake-out",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "uproar",
      "method": "level_up",
      "level": 32
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
      "id": "nature-power",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "nature-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "knock-off",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "astonish",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "water-sport",
      "method": "level_up",
      "level": 20
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "energy-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "zen-headbutt",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "grass-knot",
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
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default lombre;
