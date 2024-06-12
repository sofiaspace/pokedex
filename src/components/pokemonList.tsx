"use client";

import { pokemonsQuery } from "@/graphql/queries/pokemons";
import { useQuery } from "@apollo/client";
import PokemonCard from "./pokemonCard";
import Loading from "../app/loading";
import Inputs from "./inputs/inputs";
import { useState } from "react";

export interface PokemonProps {
  pokemon_v2_pokemon: Array<{
    name: string;
    id: number;
    height: number;
    weight: number;
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
    pokemon_v2_pokemonabilities: Array<{
      pokemon_v2_ability: {
        name: string;
      };
    }>;
    pokemon_v2_pokemonmoves: {
      pokemon_v2_move: {
        name: string;
      };
    };
  }>;
}

const PokemonList = () => {
  const [pokemonType, setPokemonType] = useState<string>("all types");
  const [pokemonNumber, setPokemonNumber] = useState<string>("1-10");
  const { data, loading, error } = useQuery<PokemonProps>(pokemonsQuery, {
    variables: { limit: 10 },
  });

  if (loading) {
    return <Loading />;
  }
  if (data === undefined || error || null) {
    return <div>No pokemon data</div>;
  }

  const filteredPokemons =
    pokemonType === "all types"
      ? data.pokemon_v2_pokemon
      : data.pokemon_v2_pokemon.filter((pokemon) =>
          pokemon.pokemon_v2_pokemontypes_aggregate.nodes[0].pokemon_v2_type.name.includes(
            pokemonType
          )
        );
  console.log(pokemonNumber);

  return (
    <div className="flex flex-col w-[100%]">
      <Inputs
        data={data}
        pokemonType={pokemonType}
        setPokemonType={setPokemonType}
        pokemonNumber={pokemonNumber}
        setPokemonNumber={setPokemonNumber}
      />
      <div className="grid grid-cols-[repeat(auto-fill,11rem)] gap-6 w-[100%] place-content-center">
        {filteredPokemons.map(
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
