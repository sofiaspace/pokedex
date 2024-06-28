"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface InputsProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  data: {
    pokemon_v2_pokemon: Array<{
      name: string;
      pokemon_v2_pokemontypes_aggregate: {
        nodes: Array<{
          pokemon_v2_type: {
            name: string;
          };
        }>;
      };
    }>;
  };
}

const Inputs = ({ data, search, setSearch }: InputsProps) => {
  const types: string[] = Array.from(
    new Set(
      data.pokemon_v2_pokemon.map(
        (item) =>
          item.pokemon_v2_pokemontypes_aggregate.nodes[0].pokemon_v2_type.name
      )
    )
  );
  types.unshift("all types");

  const router = useRouter();

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(`/type?type=${e.target.value}`);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(`/amount?amount=${e.target.value}`);
  };

  return (
    <div className="w-[100%] flex flex-row flex-wrap gap-2 lg:gap-4 justify-center pb-16 text-center">
      <div className="flex flex-col w-3/5 md:w-2/4 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
        <label className="text-slate-300">Pokemons:</label>
        <select
          className="border rounded-xl px-2 py-1 flex-1"
          onChange={(e) => handleAmountChange(e)}
        >
          <option value={"1000"}>All Pokémon</option>
          <option value={"1-100"}>1-100 Pokémon</option>
          <option value={"101-400"}>101-400 Pokémon</option>
          <option value={"401-700"}>401-700 Pokémon</option>
          <option value={"701-1000"}>701-1000 Pokémon</option>
        </select>
      </div>
      <div className="flex flex-col w-3/5 md:w-2/4 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
        <label className="text-slate-300">Search:</label>
        <input
          className="border rounded-xl px-2 py-1"
          type="text"
          value={search}
          spellCheck={false}
          onChange={({ target }) => setSearch(target.value)}
        />
      </div>
      <div className="flex flex-col w-3/5 md:w-2/4 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
        <label className="text-slate-300">Types:</label>
        <select
          className="border rounded-xl px-2 py-1 flex-1"
          onChange={(e) => handleTypeChange(e)}
        >
          {types.map((type) => (
            <option className="cursor-pointer" key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Inputs;
