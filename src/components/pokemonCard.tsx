"use client";

import Image from "next/image";
import { idConverter } from "@/ui/idConverter";
import info from "../../public/img/info-icon.png";
import Link from "next/link";
import { typeColor } from "@/ui/typeColor";

interface PokemonCardProps {
  id: number;
  name: string;
  pokemon_v2_pokemontypes_aggregate: {
    nodes: Array<{
      pokemon_v2_type: {
        name: string;
      };
    }>;
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
  pokemon_v2_pokemontypes_aggregate,
  pokemon_v2_pokemonsprites_aggregate,
}: PokemonCardProps) => {
  const src: string =
    pokemon_v2_pokemonsprites_aggregate.nodes[0].sprites.other[
      "official-artwork"
    ].front_default;

  const type: string | string[] = pokemon_v2_pokemontypes_aggregate.nodes.map(
    ({ pokemon_v2_type }) => pokemon_v2_type.name
  );

  const color: string = typeColor[type[0]];

  return (
    <Link
      href={`/pokemon/profile/${id}`}
      className="border rounded-xl flex flex-col items-center justify-between bg-slate-50 bg-opacity-30 h-[12rem] relative hover:bg-opacity-40"
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
        className={`${color} bg-opacity-40 w-[100%] border rounded-xl h-2/6 flex pb-2`}
      >
        <p className="uppercase self-end w-[100%] text-center font-medium">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default PokemonCard;
