export const VERSION_GROUPS = {
  RB: "red-blue",
  Y: "yellow",
  GS: "gold-silver",
  C: "crystal",
  RS: "ruby-sapphire",
  E: "emerald",
  FRLG: "firered-leafgreen",
  DP: "diamond-pearl",
  P: "platinum",
  HGSS: "heartgold-soulsilver",
  BW: "black-white",
  COL: "colosseum",
  XD: "xd",
  B2W2: "black-2-white-2",
  XY: "x-y",
  ORAS: "omega-ruby-alpha-sapphire",
  SM: "sun-moon",
  USUM: "ultra-sun-ultra-moon",
  LGPLGE: "lets-go-pikachu-lets-go-eevee",
  SWSH: "sword-shield",
};

export declare type TypeColors = {
  backgroundColor: string;
  textColor: string;
};

const colorObject = (
  backgroundColor: string,
  textColor: string
): TypeColors => ({
  backgroundColor,
  textColor,
});

export function getColorsByType(type: string): TypeColors {
  switch (type.toLowerCase()) {
    case "normal":
      return colorObject("bg-normal", "text-normal");
    case "fire":
      return colorObject("bg-fire", "text-fire");
    case "water":
      return colorObject("bg-water", "text-water");
    case "electric":
      return colorObject("bg-electric", "text-electric");
    case "grass":
      return colorObject("bg-grass", "text-grass");
    case "ice":
      return colorObject("bg-ice", "text-ice");
    case "fighting":
      return colorObject("bg-fighting", "text-fighting");
    case "poison":
      return colorObject("bg-poison", "text-poison");
    case "ground":
      return colorObject("bg-ground", "text-ground");
    case "flying":
      return colorObject("bg-flying", "text-flying");
    case "psychic":
      return colorObject("bg-psychic", "text-psychic");
    case "bug":
      return colorObject("bg-bug", "text-bug");
    case "rock":
      return colorObject("bg-rock", "text-rock");
    case "ghost":
      return colorObject("bg-ghost", "text-ghost");
    case "dragon":
      return colorObject("bg-dragon", "text-dragon");
    case "dark":
      return colorObject("bg-dark", "text-dark");
    case "steel":
      return colorObject("bg-steel", "text-steel");
    case "fairy":
      return colorObject("bg-fairy", "text-fairy");
    default:
      return colorObject("bg-violet-700", "text-violet-700");
  }
}

export function test() {}

export const weightToKg = (weight: number) => weight / 10;

export const weightToLbs = (weight: number) =>
  (weightToKg(weight) * 2.2046226218).toFixed(1);

export const heightToM = (height: number) => height / 10;

export const heightToFeet = (height: number) =>
  (heightToM(height) * 3.2808).toFixed(1).replace(".", "'").concat('"');
