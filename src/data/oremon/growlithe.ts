import { OremonData } from "../../types/OremonData";

const growlithe: OremonData = {
  "id": "oremon:growlithe",
  "name": "oremon.growlithe.name",
  "description": "oremon.growlithe.description",
  "types": [
    "fire"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 70,
    "def": 45,
    "atk_spe": 70,
    "def_spe": 50,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 2,
  "catchRate": 190,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.7,
  "weight": 19,
  "baseExperience": 70,
  "growthRateId": "slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:arcanine",
      "method": "use-item",
      "conditions": {
        "item": "item:82",
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
      "id": "body-slam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "take-down",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "thrash",
      "method": "egg",
      "level": 0
    },
    {
      "id": "double-edge",
      "method": "egg",
      "level": 0
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "bite",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "roar",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "roar",
      "method": "machine",
      "level": 0
    },
    {
      "id": "ember",
      "method": "level_up",
      "level": 6
    },
    {
      "id": "flamethrower",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "flamethrower",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fire-spin",
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
      "level": 30
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
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
      "id": "flame-wheel",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "reversal",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "outrage",
      "method": "level_up",
      "level": 43
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
      "id": "iron-tail",
      "method": "egg",
      "level": 0
    },
    {
      "id": "morning-sun",
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
      "method": "level_up",
      "level": 39
    },
    {
      "id": "crunch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "heat-wave",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "heat-wave",
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
      "id": "helping-hand",
      "method": "level_up",
      "level": 12
    },
    {
      "id": "overheat",
      "method": "machine",
      "level": 0
    },
    {
      "id": "odor-sleuth",
      "method": "level_up",
      "level": 10
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
      "id": "close-combat",
      "method": "egg",
      "level": 0
    },
    {
      "id": "flare-blitz",
      "method": "level_up",
      "level": 45
    },
    {
      "id": "flare-blitz",
      "method": "egg",
      "level": 0
    },
    {
      "id": "fire-fang",
      "method": "level_up",
      "level": 21
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
      "id": "retaliate",
      "method": "level_up",
      "level": 32
    },
    {
      "id": "wild-charge",
      "method": "machine",
      "level": 0
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
    },
    {
      "id": "burn-up",
      "method": "egg",
      "level": 0
    }
  ]
};

export default growlithe;
