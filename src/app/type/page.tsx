import PokemonTypes from "@/components/pokemonTypes";
import { PokemonProps } from "@/graphql/queries/pokemons.types";

interface PokemonTypePageProps {
  searchParams: {
    type: string;
  };
}

const PokemonTypePage = ({ searchParams }: PokemonTypePageProps) => {
  const pokemonType = searchParams.type;

  return (
    <div className="w-[100%]">
      <PokemonTypes pokemonType={pokemonType} />
    </div>
  );
};

export default PokemonTypePage;
