"use client";
import { pokemonsQuery } from "@/graphql/queries/pokemons";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { PokemonProps } from "./pokemonList";

interface PokemonProfileProps extends PokemonProps {
  pokemonId: string;
}

const PokemonProfile = ({ pokemonId }: PokemonProfileProps) => {
  const { data, loading, error } = useQuery(pokemonsQuery);
  const id = Number(pokemonId) - 1;

  if (loading) {
    return <div>loading...</div>;
  }
  if (data === undefined || error) {
    return <div>No pokemon data</div>;
  }

  const pokemon = data.pokemon_v2_pokemon[id];
  const src =
    pokemon.pokemon_v2_pokemonsprites_aggregate.nodes[0].sprites.other[
      "official-artwork"
    ].front_default;

  return (
    <div className="text-center h-screen flex justify-center items-center">
      <div className="bg-slate-50 bg-opacity-30 font-robo border rounded-xl uppercase">
        {pokemon.name}

        <Image
          loader={() => src}
          src={src}
          alt="Pokemon image"
          width={120}
          height={120}
          className="self-center"
          unoptimized
        />
      </div>
    </div>
  );
};

export default PokemonProfile;
