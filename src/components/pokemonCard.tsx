"use client";

import Image from "next/image";
import { PokemonProps } from "./pokemonList";

interface PokemonCardProps extends PokemonProps {}

const PokemonCard = ({ name, pokemon_v2_pokemonsprites }: PokemonProps) => {
  const src = `${pokemon_v2_pokemonsprites[0].sprites.front_default}`;
  return (
    <div>
      <div className="border rounded-sm flex flex-col items-center justify-center">
        {name}
        <Image
          loader={() => src}
          src={src}
          alt="Pokemon image"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default PokemonCard;
