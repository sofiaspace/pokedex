"use client";

import { pokemonsQuery } from "@/graphql/queries/pokemons";
import { useQuery } from "@apollo/client";
import PokemonCard from "./pokemonCard";

export interface PokemonProps {
  name: string;
  id: number;
  pokemon_v2_pokemonsprites?: Array<{
    sprites: {
      front_default: string;
    };
  }>;
  pokemon_v2_pokemonspecy: {
    pokemon_v2_pokemoncolor: {
      name: string;
    };
  };
  pokemon_v2_pokemonsprites_aggregate: {
    nodes: Array<{
      sprites: {
        other: {
          "official-artwork": {
            "front-default": string;
          };
        };
      };
    }>;
  };
}

const PokemonList = () => {
  const { data, loading, error } = useQuery(pokemonsQuery, {
    variables: { limit: 5 },
  });

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
          ({
            name,
            id,
            pokemon_v2_pokemonspecy,
            pokemon_v2_pokemonsprites_aggregate,
          }: PokemonProps) => (
            <PokemonCard
              id={id}
              key={id}
              name={name}
              pokemon_v2_pokemonspecy={pokemon_v2_pokemonspecy}
              pokemon_v2_pokemonsprites_aggregate={
                pokemon_v2_pokemonsprites_aggregate
              }
            />
          )
        )}
      </div>
    </div>
  );
};

export default PokemonList;
