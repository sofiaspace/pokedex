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
  ice: "bg-red-300",
  fighting: "bg-red-300",
  bug: "bg-green-300",
  grass: "bg-green-300",
  water: "bg-blue-300",
  flying: "bg-blue-300",
  ghost: "bg-blue-100",
  poison: "bg-purple-500",
  psychic: "bg-purple-500",
  dragon: "bg-yellow-300",
  electric: "bg-yellow-300",
  ground: "bg-amber-600",
  rock: "bg-amber-600",
  fairy: "bg-pink-300",
  dark: "bg-gray-300",
  steel: "bg-gray-300",
  normal: "bg-zinc-600",
};
