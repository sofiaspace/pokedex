"use client";

import Image from "next/image";
import { PokemonProps } from "./pokemonList";
import { idConverter } from "@/ui/idConverter";
import info from "../../public/img/info-icon.png";
import Link from "next/link";

const PokemonCard = ({ name, id, pokemon_v2_pokemonsprites }: PokemonProps) => {
  const src = `${pokemon_v2_pokemonsprites[0].sprites.front_default}`;

  return (
    <div className="border rounded-xl flex flex-col items-center justify-between bg-slate-50 bg-opacity-30 font-robo h-[12rem] relative ">
      <div className="w-[100%] flex flex-row justify-between p-2">
        <p className="h-1">{idConverter(id)}</p>
        <Link href={`/pokemon/profile/${id}`}>
          <Image src={info} width={20} height={20} alt="Info icon" />
        </Link>
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
      <div className="bg-slate-50 bg-opacity-40 w-[100%] border rounded-xl h-2/6 flex pb-2">
        <p className="uppercase self-end w-[100%] text-center">{name}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
