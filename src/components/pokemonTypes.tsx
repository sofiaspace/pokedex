"use client";

import Loading from "@/app/loading";
import { pokemonsQuery } from "@/graphql/queries/pokemons";
import { PokemonProps } from "@/graphql/queries/pokemons.types";
import { useQuery } from "@apollo/client";
import PokemonCard from "./pokemonCard";

interface PokemonTypesProps {
  pokemonType: string;
}

const PokemonTypes = ({ pokemonType }: PokemonTypesProps) => {
  const { data, loading, error } = useQuery<PokemonProps>(pokemonsQuery, {
    variables: { limit: 1000 },
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
          pokemon.pokemon_v2_pokemontypes_aggregate.nodes.find(
            ({ pokemon_v2_type }) => pokemon_v2_type.name.includes(pokemonType)
          )
        );

  return (
    <div className="flex flex-col w-[100%]">
      <p className="self-center uppercase bg-gradient-to-r from-yellow-300 via-blue-400 to-red-600 text-transparent bg-clip-text inline-block font-bold text-lg pb-6">
        {pokemonType} type
      </p>
      <div className="w-[100%] grid grid-cols-[repeat(auto-fill,10rem)] lg:grid-cols-[repeat(auto-fill,11rem)] gap-2 md:gap-3 lg:gap-3 place-content-center">
        {filteredPokemons.map(
          ({
            name,
            id,
            pokemon_v2_pokemonsprites_aggregate,
            pokemon_v2_pokemontypes_aggregate,
          }) => (
            <PokemonCard
              key={id}
              id={id}
              name={name}
              pokemon_v2_pokemonsprites_aggregate={
                pokemon_v2_pokemonsprites_aggregate
              }
              pokemon_v2_pokemontypes_aggregate={
                pokemon_v2_pokemontypes_aggregate
              }
            />
          )
        )}
      </div>
    </div>
  );
};

export default PokemonTypes;
