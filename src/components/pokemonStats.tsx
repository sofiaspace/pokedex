"use client";

interface PokemonStatsProps {
  stats: Array<{
    pokemon_v2_stat: {
      name: string;
    };
    base_stat: number;
  }>;
  abilities: Array<{
    pokemon_v2_ability: {
      name: string;
    };
  }>;
  description: string;
}

const PokemonStats = ({ stats, abilities, description }: PokemonStatsProps) => {
  const firstAbility = abilities[0].pokemon_v2_ability.name;
  const secondAbility = abilities[1].pokemon_v2_ability.name;

  return (
    <div className="flex flex-col text-left flex-1">
      <p className="font-bold">Description</p>
      <p className="pb-2 text-sm">{description}</p>
      <p className="font-bold">Abilities</p>
      <div className="flex flex-row gap-2 pb-2">
        <p className="first-letter:capitalize text-sm">
          {firstAbility} and {secondAbility}
        </p>
      </div>

      <p className="font-bold">Stats</p>
      <ul className="">
        {stats.map((stat) => {
          const percentageStats = (stat.base_stat * 100) / 200 + "%";
          return (
            <li key={stat.pokemon_v2_stat.name}>
              <div className="flex flex-row gap-2 items-center">
                <p>{stat.pokemon_v2_stat.name}</p>
                <p className="text-sm">{stat.base_stat}</p>
              </div>
              <div className="rounded-sm bg-slate-50 h-1 w-[100%]">
                <div
                  style={{ width: percentageStats }}
                  className="bg-stone-600 
                 h-1 rounded-sm"
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PokemonStats;
