import PokemonAmount from "@/components/pokemonAmount";

interface PokemonAmountPageProps {
  searchParams: {
    amount: string;
  };
}

const PokemonAmountPage = ({ searchParams }: PokemonAmountPageProps) => {
  const pokemonAmount = searchParams.amount;
  return (
    <div className="w-[100%] h-full">
      <PokemonAmount pokemonAmount={pokemonAmount} />
    </div>
  );
};

export default PokemonAmountPage;
