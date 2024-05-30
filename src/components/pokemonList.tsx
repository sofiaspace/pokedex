"use client";

import { pokemonsQuery } from "@/graphql/queries/pokemons";
import { useQuery } from "@apollo/client";
import PokemonCard from "./pokemonCard";
import PokemonLoadingPage from "./loading";
import Inputs from "./inputs/inputs";

export interface PokemonProps {
  pokemon_v2_pokemon: Array<{
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
              front_default: string;
            };
          };
        };
      }>;
    };
    pokemon_v2_pokemontypes_aggregate: {
      nodes: Array<{
        pokemon_v2_type: {
          name: string;
        };
      }>;
    };
  }>;
}

const PokemonList = () => {
  const { data, loading, error } = useQuery<PokemonProps>(pokemonsQuery, {
    variables: { limit: 100 },
  });

  if (loading) {
    return <PokemonLoadingPage />;
  }
  if (data === undefined || error || null) {
    return <div>No pokemon data</div>;
  }

  return (
    <div className="flex flex-col w-[100%]">
      <Inputs data={data} />
      <div className="grid grid-cols-[repeat(auto-fill,11rem)] gap-6 w-[100%] place-content-center">
        {data.pokemon_v2_pokemon.map(
          ({
            name,
            id,
            pokemon_v2_pokemonspecy,
            pokemon_v2_pokemonsprites_aggregate,
          }) => (
            <PokemonCard
              key={id}
              id={id}
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
