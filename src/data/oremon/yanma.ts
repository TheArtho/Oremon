import { OremonData } from "../../types/OremonData";

const yanma: OremonData = {
  "id": "oremon:yanma",
  "name": "oremon.yanma.name",
  "description": "oremon.yanma.description",
  "types": [
    "bug",
    "flying"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 65,
    "def": 45,
    "atk_spe": 75,
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
  "catchRate": 75,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 20,
  "height": 1.2,
  "weight": 38,
  "baseExperience": 78,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "bug wings",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:yanmega",
      "method": "level-up",
      "conditions": {
        "knownMove": "move:246",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "wing-attack",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "whirlwind",
      "method": "egg",
      "level": 0
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "double-edge",
      "method": "egg",
      "level": 0
    },
    {
      "id": "supersonic",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "sonic-boom",
      "method": "level_up",
      "level": 14
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
      "id": "psychic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hypnosis",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "quick-attack",
      "method": "level_up",
      "level": 6
    },
    {
      "id": "screech",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "double-team",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dream-eater",
      "method": "machine",
      "level": 0
    },
    {
      "id": "leech-life",
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
      "id": "foresight",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "detect",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "steel-wing",
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
      "level": 30
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
      "method": "level_up",
      "level": 33
    },
    {
      "id": "shadow-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "uproar",
      "method": "level_up",
      "level": 27
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "secret-power",
      "method": "egg",
      "level": 0
    },
    {
      "id": "silver-wind",
      "method": "egg",
      "level": 0
    },
    {
      "id": "signal-beam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "roost",
      "method": "machine",
      "level": 0
    },
    {
      "id": "feint",
      "method": "egg",
      "level": 0
    },
    {
      "id": "u-turn",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "u-turn",
      "method": "machine",
      "level": 0
    },
    {
      "id": "air-slash",
      "method": "level_up",
      "level": 54
    },
    {
      "id": "bug-buzz",
      "method": "level_up",
      "level": 57
    },
    {
      "id": "round",
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

export default yanma;
