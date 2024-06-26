import PokemonProfile from "@/components/pokemonProfile";

interface Pokemon {
  params: {
    pokemonId: string;
  };
}

const PokemonProfilePage = ({ params }: Pokemon) => {
  const { pokemonId } = params;

  return (
    <PokemonProfile
      pokemonId={pokemonId}
      pokemon_v2_pokemon={[]}
      pokemon_v2_characteristic={[]}
    />
  );
};

export default PokemonProfilePage;
