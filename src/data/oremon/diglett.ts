import { OremonData } from "../../types/OremonData";

const diglett: OremonData = {
  "id": "oremon:diglett",
  "name": "oremon.diglett.name",
  "description": "oremon.diglett.description",
  "types": [
    "ground"
  ],
  "baseStats": {
    "hp": 10,
    "atk": 55,
    "def": 25,
    "atk_spe": 35,
    "def_spe": 45,
    "spd": 95
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
  "catchRate": 255,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.2,
  "weight": 0.8,
  "baseExperience": 53,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:dugtrio",
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
      "id": "scratch",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "sand-attack",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "headbutt",
      "method": "egg",
      "level": 0
    },
    {
      "id": "growl",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "earthquake",
      "method": "level_up",
      "level": 39
    },
    {
      "id": "earthquake",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fissure",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "dig",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "screech",
      "method": "egg",
      "level": 0
    },
    {
      "id": "double-team",
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
      "level": 35
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
      "method": "egg",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "feint-attack",
      "method": "egg",
      "level": 0
    },
    {
      "id": "sludge-bomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mud-slap",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "sandstorm",
      "method": "machine",
      "level": 0
    },
    {
      "id": "endure",
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
      "id": "magnitude",
      "method": "level_up",
      "level": 14
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
      "id": "sunny-day",
      "method": "machine",
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
      "id": "uproar",
      "method": "egg",
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
      "id": "astonish",
      "method": "level_up",
      "level": 7
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
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sucker-punch",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "earth-power",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "shadow-claw",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mud-bomb",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "mud-bomb",
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
      "id": "final-gambit",
      "method": "egg",
      "level": 0
    },
    {
      "id": "bulldoze",
      "method": "level_up",
      "level": 18
    },
    {
      "id": "bulldoze",
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

export default diglett;
