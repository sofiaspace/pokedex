import PokemonTypes from "@/components/pokemonTypes";

interface PokemonTypePageProps {
  searchParams: {
    type: string;
  };
}

const PokemonTypePage = ({ searchParams }: PokemonTypePageProps) => {
  const pokemonType = searchParams.type;

  return (
    <div className="w-[100%] h-full">
      <PokemonTypes pokemonType={pokemonType} />
    </div>
  );
};

export default PokemonTypePage;
