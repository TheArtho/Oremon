import { OremonData } from "../../types/OremonData";

const exeggcute: OremonData = {
  "id": "oremon:exeggcute",
  "name": "oremon.exeggcute.name",
  "description": "oremon.exeggcute.description",
  "types": [
    "grass",
    "psychic"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 40,
    "def": 80,
    "atk_spe": 60,
    "def_spe": 45,
    "spd": 40
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 90,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 2.5,
  "baseExperience": 65,
  "growthRateId": "slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "heads",
  "color": "Pink",
  "evolutions": [
    {
      "into": "oremon:exeggutor",
      "method": "use-item",
      "conditions": {
        "item": "item:85",
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
      "id": "leech-seed",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "solar-beam",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "poison-powder",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "stun-spore",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "sleep-powder",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "confusion",
      "method": "level_up",
      "level": 27
    },
    {
      "id": "psychic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hypnosis",
      "method": "level_up",
      "level": 1
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
      "id": "reflect",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "reflect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dream-eater",
      "method": "machine",
      "level": 0
    },
    {
      "id": "barrage",
      "method": "level_up",
      "level": 1
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
      "id": "sludge-bomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "giga-drain",
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
      "id": "synthesis",
      "method": "egg",
      "level": 0
    },
    {
      "id": "moonlight",
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
      "id": "psych-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "ancient-power",
      "method": "egg",
      "level": 0
    },
    {
      "id": "uproar",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "nature-power",
      "method": "egg",
      "level": 0
    },
    {
      "id": "nature-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "ingrain",
      "method": "egg",
      "level": 0
    },
    {
      "id": "skill-swap",
      "method": "egg",
      "level": 0
    },
    {
      "id": "extrasensory",
      "method": "level_up",
      "level": 47
    },
    {
      "id": "bullet-seed",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "block",
      "method": "egg",
      "level": 0
    },
    {
      "id": "natural-gift",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "natural-gift",
      "method": "egg",
      "level": 0
    },
    {
      "id": "lucky-chant",
      "method": "egg",
      "level": 0
    },
    {
      "id": "power-swap",
      "method": "egg",
      "level": 0
    },
    {
      "id": "worry-seed",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "energy-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "trick-room",
      "method": "machine",
      "level": 0
    },
    {
      "id": "leaf-storm",
      "method": "egg",
      "level": 0
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
      "id": "bestow",
      "method": "level_up",
      "level": 50
    },
    {
      "id": "grassy-terrain",
      "method": "egg",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "infestation",
      "method": "machine",
      "level": 0
    }
  ]
};

export default exeggcute;
