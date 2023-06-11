import { StatName } from "./interfaces";

export const FORMATTED_NAMES: { [key: string]: string } = {
  "nidoran-f": "Nidoran ♀",
  "nidoran-m": "Nidoran ♂",
  "wo-chien": "Wo-Chien",
  "chien-pao": "Chien-Pao",
  "ting-lu": "Ting-Lu",
  "chi-yu": "Chi-Yu",
};

export const STAT_NAMES: { [key in StatName]: string } = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Attack",
  "special-defense": "Sp. Defense",
  speed: "Speed",
};

export type VersionGroup =
  | "red-blue"
  | "yellow"
  | "gold-silver"
  | "crystal"
  | "ruby-sapphire"
  | "emerald"
  | "firered-leafgreen"
  | "diamond-pearl"
  | "platinum"
  | "heartgold-soulsilver"
  | "diamond-pearl"
  | "heartgold-soulsilver"
  | "black-white"
  | "colosseum"
  | "xd"
  | "black-2-white-2"
  | "x-y"
  | "omage-ruby-alpha-sapphire"
  | "sun-moon"
  | "ultra-sun-ultra-moon"
  | "lets-go-pikachu-lets-go-eevee"
  | "sword-shield"
  | "brilliant-diamond-shining-pearl"
  | "scarlet-violet";

export const VERSION_GROUPS: { [key in VersionGroup]: string } = {
  "red-blue": "RB",
  yellow: "Y",
  "gold-silver": "GS",
  crystal: "C",
  "ruby-sapphire": "RS",
  emerald: "E",
  "firered-leafgreen": "FRLG",
  "diamond-pearl": "DP",
  platinum: "Platinum",
  "heartgold-soulsilver": "HGSS",
  "black-white": "BW",
  colosseum: "COL",
  xd: "XD",
  "black-2-white-2": "B2W2",
  "x-y": "XY",
  "omage-ruby-alpha-sapphire": "ORAS",
  "sun-moon": "SM",
  "ultra-sun-ultra-moon": "USUM",
  "lets-go-pikachu-lets-go-eevee": "LGPLGE",
  "sword-shield": "SWSH",
  "brilliant-diamond-shining-pearl": "BDSP",
  "scarlet-violet": "SV",
};

export type LearnMethod = "level-up" | "machine" | "tutor" | "egg";

export const LEARN_METHODS: { [key in LearnMethod]: string } = {
  "level-up": "Level",
  machine: "TM/HM",
  tutor: "Move tutor",
  egg: "Egg moves",
};
