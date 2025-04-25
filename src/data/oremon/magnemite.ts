import { OremonData } from "../../types/OremonData";

const magnemite: OremonData = {
  "id": "oremon:magnemite",
  "name": "oremon.magnemite.name",
  "description": "oremon.magnemite.description",
  "types": [
    "electric",
    "steel"
  ],
  "baseStats": {
    "hp": 25,
    "atk": 35,
    "def": 70,
    "atk_spe": 95,
    "def_spe": 55,
    "spd": 45
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
  "genderRate": -1,
  "catchRate": 190,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 0.3,
  "weight": 6,
  "baseExperience": 65,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:magneton",
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
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "supersonic",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "sonic-boom",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "thunder-shock",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "thunderbolt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder-wave",
      "method": "level_up",
      "level": 7
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
      "id": "screech",
      "method": "level_up",
      "level": 35
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "light-screen",
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
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "zap-cannon",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "lock-on",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "spark",
      "method": "level_up",
      "level": 19
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
      "id": "psych-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "metal-sound",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "gyro-ball",
      "method": "level_up",
      "level": 47
    },
    {
      "id": "gyro-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "magnet-rise",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "mirror-shot",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "flash-cannon",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "flash-cannon",
      "method": "machine",
      "level": 0
    },
    {
      "id": "discharge",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "magnet-bomb",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "charge-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "electro-ball",
      "method": "level_up",
      "level": 29
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

export default magnemite;
