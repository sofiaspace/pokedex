"use client";
import { pokemonsQuery } from "@/graphql/queries/pokemons";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { PokemonProps } from "./pokemonList";

import Loading from "../app/loading";
import PokemonStats from "./pokemonStats";

interface PokemonProfileProps extends PokemonProps {
  pokemonId: string;
}

const PokemonProfile = ({ pokemonId }: PokemonProfileProps) => {
  const { data, loading, error } = useQuery(pokemonsQuery, {
    variables: { limit: 10 },
  });
  const id = Number(pokemonId) - 1;
  console.log(data);
  if (loading) {
    return <Loading />;
  }
  if (data === undefined || error) {
    return <div>No pokemon data</div>;
  }

  const pokemon = data.pokemon_v2_pokemon[id];
  const src =
    pokemon.pokemon_v2_pokemonsprites_aggregate.nodes[0].sprites.other[
      "official-artwork"
    ].front_default;

  const color = pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name;
  const height = pokemon.height + " " + "cm";
  const weight = pokemon.weight + " " + "kg";

  const stats = pokemon.pokemon_v2_pokemonstats;
  const abilities = pokemon.pokemon_v2_pokemonabilities;

  return (
    <div className="w-[100%] text-center flex justify-center items-center">
      <div
        className={`${
          color === "red"
            ? "bg-red-300"
            : color === "green"
            ? "bg-green-300"
            : color === "blue"
            ? "bg-blue-300"
            : color === "purple"
            ? "bg-purple-300"
            : color === "yellow"
            ? "bg-yellow-300"
            : color === "brown"
            ? "bg-amber-600"
            : color === "pink"
            ? "bg-pink-300"
            : color === "gray"
            ? "bg-gray-300"
            : color === "black"
            ? "bg-zinc-600"
            : null
        }  bg-opacity-40 font-robo border rounded-xl flex flex-col p-4 w-2/5`}
      >
        <p className="uppercase pb-4 font-bold text-lg">{pokemon.name}</p>
        <div className="flex flex-row gap-6 pl-3">
          <div>
            <Image
              loader={() => src}
              src={src}
              alt="Pokemon image"
              width={120}
              height={120}
              className="self-center"
              unoptimized
            />
            <div className="flex flex-row gap-2 pt-6">
              <p className="font-bold">Weight </p> <p>{weight}</p>
            </div>
            <div className="flex flex-row gap-3">
              <p className="font-bold">Height</p>
              <p>{height}</p>
            </div>
          </div>

          <PokemonStats stats={stats} abilities={abilities} />
        </div>
      </div>
    </div>
  );
};

export default PokemonProfile;
