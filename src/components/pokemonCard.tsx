"use client";

import Image from "next/image";
import { PokemonProps } from "./pokemonList";
import { idConverter } from "@/ui/idConverter";
import info from "../../public/img/info-icon.png";

const PokemonCard = ({ name, id, pokemon_v2_pokemonsprites }: PokemonProps) => {
  const src = `${pokemon_v2_pokemonsprites[0].sprites.front_default}`;

  return (
    <div className="border rounded-xl flex flex-col items-center justify-center p-3 bg-slate-50 bg-opacity-30 font-robo border-">
      <div className="w-[100%] flex flex-row justify-between">
        <p>{idConverter(id)}</p>
        <div>
          <Image src={info} width={20} height={20} alt="Info icon" />
        </div>
      </div>

      {src !== "null" && (
        <Image
          loader={() => src}
          src={src}
          alt="Pokemon image"
          width={120}
          height={120}
        />
      )}
      <p className="uppercase">{name}</p>
    </div>
  );
};

export default PokemonCard;
