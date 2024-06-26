"use client";
import Image from "next/image";
import Loading from "../app/loading";
import { useQuery } from "@apollo/client";
import PokemonStats from "./pokemonStats";
import { pokemonsQuery } from "@/graphql/queries/pokemons";
import { PokemonProps } from "@/graphql/queries/pokemons.types";
import TypeIcon from "./typeIcon";
import { typeColor } from "@/ui/typeColor";

interface PokemonProfileProps extends PokemonProps {
  pokemonId: string;
}

const PokemonProfile = ({ pokemonId }: PokemonProfileProps) => {
  const { data, loading, error } = useQuery<PokemonProps>(pokemonsQuery, {
    variables: { limit: 1000 },
  });
  const id = Number(pokemonId) - 1;

  if (loading) {
    return <Loading />;
  }
  if (data === undefined || error) {
    return <div>No pokemon data</div>;
  }

  const description =
    data.pokemon_v2_characteristic[id]?.pokemon_v2_characteristicdescriptions[7]
      .description;

  const pokemon = data.pokemon_v2_pokemon[id];
  const src =
    pokemon.pokemon_v2_pokemonsprites_aggregate.nodes[0].sprites.other[
      "official-artwork"
    ].front_default;
  const type: string | string[] =
    pokemon.pokemon_v2_pokemontypes_aggregate.nodes.map(
      ({ pokemon_v2_type }: any) => pokemon_v2_type.name
    );

  const height = pokemon.height + " " + "cm";
  const weight = pokemon.weight + " " + "kg";

  const stats = pokemon.pokemon_v2_pokemonstats;
  const abilities = pokemon.pokemon_v2_pokemonabilities;
  const color = typeColor[type[0]];
  const generation =
    pokemon.pokemon_v2_pokemontypes_aggregate.nodes[0].pokemon_v2_type
      .pokemon_v2_generation.name;

  return (
    <div className="w-[100%] text-center flex justify-center items-center text-slate-200 pb-28">
      <div
        className={`${color} bg-opacity-30 border rounded-xl flex flex-col p-4 w-2/6`}
      >
        <p className="uppercase pb-4 text-2xl">{pokemon.name}</p>
        <div className="flex flex-row gap-6 pl-3">
          <div>
            <Image
              loader={() => src}
              src={src}
              alt="Pokemon image"
              width={140}
              height={140}
              className="self-center"
              unoptimized
            />
            <div className="flex flex-row justify-center gap-2 pt-6 text-sm">
              <p>Weight</p> <p>{weight}</p>
            </div>
            <div className="flex flex-row justify-center gap-3 text-sm">
              <p>Height</p>
              <p>{height}</p>
            </div>
            <TypeIcon type={type} />
          </div>

          <PokemonStats
            type={type}
            description={description}
            stats={stats}
            abilities={abilities}
            generation={generation}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonProfile;
