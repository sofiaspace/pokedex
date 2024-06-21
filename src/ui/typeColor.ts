export type PokemonType =
  | "fire"
  | "ice"
  | "grass"
  | "water"
  | "flying"
  | "ghost"
  | "poison"
  | "psychic"
  | "dragon"
  | "electric"
  | "ground"
  | "rock"
  | "fairy"
  | "dark"
  | "steel"
  | "normal"
  | "fighting"
  | "bug";

export const typeColor: Record<string, string> = {
  fire: "bg-red-300",
  ice: "bg-sky-300",
  fighting: "bg-red-300",
  bug: "bg-yellow-300",
  grass: "bg-green-300",
  water: "bg-blue-300",
  flying: "bg-blue-300",
  ghost: "bg-blue-100",
  poison: "bg-purple-300",
  psychic: "bg-pink-400",
  dragon: "bg-yellow-300",
  electric: "bg-yellow-300",
  ground: "bg-amber-600",
  rock: "bg-orange-300",
  fairy: "bg-pink-400",
  dark: "bg-gray-300",
  steel: "bg-gray-300",
  normal: "bg-lime-200",
};
