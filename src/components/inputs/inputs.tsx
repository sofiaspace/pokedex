"use client";

import { Dispatch, SetStateAction, useState } from "react";

interface InputsProps {
  pokemonType: string;
  setPokemonType: Dispatch<SetStateAction<string>>;
  pokemonNumber: number;
  setPokemonNumber: Dispatch<SetStateAction<number>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
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
  search,
  setSearch,
}: InputsProps) => {
  const types: string[] = Array.from(
    new Set(
      data.pokemon_v2_pokemon.map(
        (item) =>
          item.pokemon_v2_pokemontypes_aggregate.nodes[0].pokemon_v2_type.name
      )
    )
  );
  types.push("all types");

  return (
    <div className="w-[100%] flex flex-row flex-wrap gap-14 justify-center pb-24 text-center">
      <div className="flex flex-col w-1/6">
        <label className="text-slate-300">Pokemons:</label>
        <select
          className="border rounded-md"
          value={pokemonNumber}
          onChange={({ target }) => setPokemonNumber(Number(target.value))}
        >
          <option value={600}>All Pokémon</option>
          <option value={10}>1-10 Pokémon</option>
          <option value={100}>11-100 Pokémon</option>
          <option value={200}>101-200 Pokémon</option>
          <option value={300}>201-300 Pokémon</option>
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
