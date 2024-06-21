"use client";

import { BackgroundColor, TextColor } from "@/ui/statsColor";

interface PokemonStatsProps {
  type: string | string[];
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

const PokemonStats = ({
  stats,
  abilities,
  description,
  type,
}: PokemonStatsProps) => {
  const firstAbility = abilities[0].pokemon_v2_ability.name;
  const secondAbility = abilities[1]?.pokemon_v2_ability.name;

  console.log(type);

  const text = TextColor[type[0]];
  const background = BackgroundColor[type[0]];

  return (
    <div className="flex flex-col text-left flex-1">
      {description && (
        <>
          <p className={`font-medium ${text}`}>Description</p>
          <p className="pb-2 text-sm">{description}</p>
        </>
      )}
      <p className={`font-medium ${text}`}>Abilities</p>
      <div className="flex flex-row gap-2 pb-2">
        <p className="first-letter:capitalize text-sm">
          {firstAbility} {secondAbility && <>and {secondAbility}</>}
        </p>
      </div>

      <p className={`font-medium ${text}`}>Stats</p>
      <ul>
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
                  className={`${background} 
                 h-1 rounded-sm`}
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
