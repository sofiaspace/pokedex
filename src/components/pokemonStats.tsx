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
}

const PokemonStats = ({ stats, abilities }: PokemonStatsProps) => {
  const firstAbility = abilities[0].pokemon_v2_ability.name;
  const secondAbility = abilities[1].pokemon_v2_ability.name;
  return (
    <div>
      {" "}
      <div className="flex flex-col text-left ">
        <p className="font-bold">Abilities</p>
        <div className="flex flex-row gap-2 pb-2">
          <p className="first-letter:capitalize">
            {firstAbility} and {secondAbility}
          </p>
        </div>

        <p className="font-bold">Stats</p>
        <ul className="grid grid-cols-3 gap-2">
          {stats.map((stat) => (
            <li key={stat.pokemon_v2_stat.name}>
              <p className="font-bold">{stat.pokemon_v2_stat.name}</p>
              {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonStats;
