import { OremonData } from "../../types/OremonData";

const gulpin: OremonData = {
  "id": "oremon:gulpin",
  "name": "oremon.gulpin.name",
  "description": "oremon.gulpin.description",
  "types": [
    "poison"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 43,
    "def": 53,
    "atk_spe": 43,
    "def_spe": 53,
    "spd": 40
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
  "catchRate": 225,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 10.3,
  "baseExperience": 60,
  "growthRateId": "fast-then-very-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:swalot",
      "method": "level-up",
      "conditions": {
        "minLevel": 26,
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
      "id": "ice-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "level_up",
      "level": 25
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
      "id": "smog",
      "method": "egg",
      "level": 0
    },
    {
      "id": "sludge",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "amnesia",
      "method": "level_up",
      "level": 12
    },
    {
      "id": "dream-eater",
      "method": "machine",
      "level": 0
    },
    {
      "id": "poison-gas",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "acid-armor",
      "method": "egg",
      "level": 0
    },
    {
      "id": "explosion",
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
      "id": "curse",
      "method": "egg",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sludge-bomb",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "sludge-bomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mud-slap",
      "method": "egg",
      "level": 0
    },
    {
      "id": "destiny-bond",
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
      "id": "pain-split",
      "method": "egg",
      "level": 0
    },
    {
      "id": "encore",
      "method": "level_up",
      "level": 20
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
      "id": "shadow-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "stockpile",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "spit-up",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "swallow",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "yawn",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "wring-out",
      "method": "level_up",
      "level": 44
    },
    {
      "id": "gastro-acid",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "gunk-shot",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "gunk-shot",
      "method": "egg",
      "level": 0
    },
    {
      "id": "venoshock",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sludge-wave",
      "method": "machine",
      "level": 0
    },
    {
      "id": "acid-spray",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "belch",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "venom-drench",
      "method": "egg",
      "level": 0
    },
    {
      "id": "infestation",
      "method": "machine",
      "level": 0
    }
  ]
};

export default gulpin;
