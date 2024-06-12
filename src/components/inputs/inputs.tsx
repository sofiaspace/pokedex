"use client";

import { Dispatch, SetStateAction, useState } from "react";

interface InputsProps {
  pokemonType: string;
  setPokemonType: Dispatch<SetStateAction<string>>;
  pokemonNumber: string;
  setPokemonNumber: Dispatch<SetStateAction<string>>;
  data: {
    pokemon_v2_pokemon: Array<{
      name: string;
      pokemon_v2_pokemontypes_aggregate: {
        nodes: Array<{
          pokemon_v2_type: {
            name: string;
          };
        }>;
      };
    }>;
  };
}

const Inputs = ({
  data,
  pokemonType,
  setPokemonType,
  pokemonNumber,
  setPokemonNumber,
}: InputsProps) => {
  const [search, setSearch] = useState<string>("");

  const types: string[] = Array.from(
    new Set(
      data.pokemon_v2_pokemon.map(
        (item) =>
          item.pokemon_v2_pokemontypes_aggregate.nodes[0].pokemon_v2_type.name
      )
    )
  );
  types.push("all types");

  const quantity: string[] = ["1-10", "1-199", "200-399", "400-599", "600-799"];

  return (
    <div className="w-[100%] flex flex-row flex-wrap gap-14 justify-center pb-24 text-center">
      <div className="flex flex-col w-1/6">
        <label className="text-slate-300">Pokemons:</label>
        <select
          className="border rounded-md"
          value={pokemonNumber}
          onChange={({ target }) => setPokemonNumber(target.value)}
        >
          {quantity.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col w-1/6">
        <label className="text-slate-300">Types:</label>
        <select
          className="border rounded-md"
          value={pokemonType}
          onChange={({ target }) => setPokemonType(target.value)}
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col w-1/6">
        <label className="text-slate-300">Search:</label>
        <input
          className="border rounded-md pl-1"
          type="text"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </div>
    </div>
  );
};

export default Inputs;
