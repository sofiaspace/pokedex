"use client";

import Loading from "@/app/loading";
import { pokemonsQuery } from "@/graphql/queries/pokemons";
import { PokemonProps } from "@/graphql/queries/pokemons.types";
import { useQuery } from "@apollo/client";
import PokemonCard from "./pokemonCard";

interface PokemonAmountProps {
  pokemonAmount: string;
}

const PokemonAmount = ({ pokemonAmount }: PokemonAmountProps) => {
  const { data, loading, error } = useQuery<PokemonProps>(pokemonsQuery, {
    variables: { limit: 1000 },
  });

  if (loading) {
    return <Loading />;
  }
  if (data === undefined || error || null) {
    return <div>No pokemon data</div>;
  }

  const pokemons = data.pokemon_v2_pokemon;
  const sliceFloor =
    pokemonAmount === "1000" || pokemonAmount === "1-100"
      ? 0
      : pokemonAmount === "101-400"
      ? 100
      : pokemonAmount === "401-700"
      ? 400
      : pokemonAmount === "701-1000"
      ? 700
      : 0;

  const sliceMax =
    pokemonAmount === "1000"
      ? 1000
      : pokemonAmount === "1-100" || pokemonAmount === "701-1000"
      ? 100
      : pokemonAmount === "101-400"
      ? 400
      : pokemonAmount === "401-700"
      ? 700
      : 1000;
  return (
    <div className="w-[100%] justify-center grid grid-cols-[repeat(auto-fill,11rem)] gap-6 place-content-center">
      {pokemons
        .slice(sliceFloor, sliceMax)
        .map(
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
  );
};

export default PokemonAmount;
