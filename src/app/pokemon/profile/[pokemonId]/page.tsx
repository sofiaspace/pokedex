import PokemonProfile from "@/components/pokemonProfile";

interface Pokemon {
  params: {
    pokemonId: string;
  };
}

const PokemonProfilePage = ({ params }: Pokemon) => {
  const { pokemonId } = params;
  console.log(params);

  return <PokemonProfile pokemonId={pokemonId} />;
};

export default PokemonProfilePage;
