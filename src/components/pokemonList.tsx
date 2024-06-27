"use client";

import { useState } from "react";
import Loading from "../app/loading";
import Inputs from "./inputs/inputs";
import { useQuery } from "@apollo/client";
import { pokemonsQuery } from "@/graphql/queries/pokemons";
import { PokemonProps } from "@/graphql/queries/pokemons.types";
import PokemonCard from "./pokemonCard";

const PokemonList = () => {
  const [search, setSearch] = useState<string>("");
  const { data, loading, error } = useQuery<PokemonProps>(pokemonsQuery, {
    variables: { limit: 1000 },
  });

  if (loading) {
    return <Loading />;
  }
  if (data === undefined || error || null) {
    return <div className="w-[100%]">No pokemon data</div>;
  }

  const allPokemons = data.pokemon_v2_pokemon;

  return (
    <div className="flex flex-col w-[100%] h-full">
      <Inputs data={data} search={search} setSearch={setSearch} />
      <div className="grid grid-cols-[repeat(auto-fill,10rem)] lg:grid-cols-[repeat(auto-fill,11rem)] gap-2 md:gap-3 lg:gap-3 w-[100%] place-content-center">
        {allPokemons
          .filter((pokemon) => pokemon.name.startsWith(search))
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
    </div>
  );
};

export default PokemonList;
