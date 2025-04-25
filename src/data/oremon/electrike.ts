import { OremonData } from "../../types/OremonData";

const electrike: OremonData = {
  "id": "oremon:electrike",
  "name": "oremon.electrike.name",
  "description": "oremon.electrike.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 45,
    "def": 40,
    "atk_spe": 65,
    "def_spe": 40,
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
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 15.2,
  "baseExperience": 59,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:manectric",
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
      "id": "headbutt",
      "method": "egg",
      "level": 0
    },
    {
      "id": "tackle",
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
      "level": 24
    },
    {
      "id": "roar",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "roar",
      "method": "machine",
      "level": 0
    },
    {
      "id": "flamethrower",
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
      "method": "level_up",
      "level": 1
    },
    {
      "id": "thunder-wave",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder",
      "method": "level_up",
      "level": 49
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
      "id": "quick-attack",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "light-screen",
      "method": "machine",
      "level": 0
    },
    {
      "id": "swift",
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
      "id": "thief",
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
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "spark",
      "method": "level_up",
      "level": 13
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
      "method": "egg",
      "level": 0
    },
    {
      "id": "uproar",
      "method": "egg",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "charge",
      "method": "level_up",
      "level": 44
    },
    {
      "id": "odor-sleuth",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "howl",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "shock-wave",
      "method": "egg",
      "level": 0
    },
    {
      "id": "switcheroo",
      "method": "egg",
      "level": 0
    },
    {
      "id": "thunder-fang",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "thunder-fang",
      "method": "egg",
      "level": 0
    },
    {
      "id": "ice-fang",
      "method": "egg",
      "level": 0
    },
    {
      "id": "fire-fang",
      "method": "egg",
      "level": 0
    },
    {
      "id": "discharge",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "discharge",
      "method": "egg",
      "level": 0
    },
    {
      "id": "charge-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "flame-burst",
      "method": "egg",
      "level": 0
    },
    {
      "id": "electro-ball",
      "method": "egg",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "volt-switch",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wild-charge",
      "method": "level_up",
      "level": 39
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
      "id": "eerie-impulse",
      "method": "egg",
      "level": 0
    }
  ]
};

export default electrike;
