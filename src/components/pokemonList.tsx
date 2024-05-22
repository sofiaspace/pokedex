"use client";

import { pokemonsQuery } from "@/apollo/queries/pokemons";
import { useQuery } from "@apollo/client";
import PokemonCard from "./pokemonCard";

export interface PokemonProps {
  name: string;
  id: number;
  pokemon_v2_pokemonsprites: Array<{
    sprites: {
      front_default: string;
    };
  }>;
}

const PokemonList = () => {
  const { data, loading, error } = useQuery(pokemonsQuery);

  if (loading) {
    return <div>loading...</div>;
  }
  if (data === undefined || error) {
    return <div>No pokemon data</div>;
  }

  return (
    <div className="flex w-[100%] p-20">
      <div className="grid grid-cols-[repeat(auto-fill,11rem)] gap-6 w-[100%] place-content-center">
        {data.pokemon_v2_pokemon.map(
          ({ name, id, pokemon_v2_pokemonsprites }: PokemonProps) => (
            <PokemonCard
              id={id}
              key={id}
              name={name}
              pokemon_v2_pokemonsprites={pokemon_v2_pokemonsprites}
            />
          )
        )}
      </div>
    </div>
  );
};

export default PokemonList;
