"use client";

import Image from "next/image";
import { idConverter } from "@/ui/idConverter";
import info from "../../public/img/info-icon.png";
import Link from "next/link";

interface PokemonCardProps {
  id: number;
  name: string;
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
}
const PokemonCard = ({
  id,
  name,
  pokemon_v2_pokemonspecy,
  pokemon_v2_pokemonsprites_aggregate,
}: PokemonCardProps) => {
  const src =
    pokemon_v2_pokemonsprites_aggregate.nodes[0].sprites.other[
      "official-artwork"
    ].front_default;
  const color = pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name;

  return (
    <Link
      href={`/pokemon/profile/${id}`}
      className="border rounded-xl flex flex-col items-center justify-between bg-slate-50 bg-opacity-30 font-robo h-[12rem] relative "
    >
      <div className="w-[100%] flex flex-row justify-between p-2">
        <p className="h-1">{idConverter(id)}</p>
        <Image src={info} width={20} height={20} alt="Info icon" />
      </div>
      <div className="h-full absolute z-10 flex">
        {src !== "null" && (
          <Image
            loader={() => src}
            src={src}
            alt="Pokemon image"
            width={120}
            height={120}
            className="self-center"
            unoptimized
          />
        )}
      </div>
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
        }  bg-opacity-40 w-[100%] border rounded-xl h-2/6 flex pb-2`}
      >
        <p className="uppercase self-end w-[100%] text-center">{name}</p>
      </div>
    </Link>
  );
};

export default PokemonCard;
