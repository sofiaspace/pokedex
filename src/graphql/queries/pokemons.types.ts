export interface PokemonProps {
  pokemon_v2_pokemon: Array<{
    name: string;
    id: number;
    height: number;
    weight: number;
    pokemon_v2_pokemonsprites_aggregate: {
      nodes: Array<{
        sprites: {
          other: {
            "official-artwork": {
              front_default: string;
            };
          };
        };
      }>;
    };
    pokemon_v2_pokemontypes_aggregate: {
      nodes: Array<{
        pokemon_v2_type: {
          pokemon_v2_generation: {
            name: string;
          };
          name: string;
        };
      }>;
    };
    pokemon_v2_pokemonabilities: Array<{
      pokemon_v2_ability: {
        name: string;
      };
    }>;
    pokemon_v2_pokemonstats: Array<{
      pokemon_v2_stat: {
        name: string;
      };
      base_stat: number;
    }>;
  }>;
  pokemon_v2_characteristic: Array<{
    pokemon_v2_characteristicdescriptions: Array<{
      description: string;
    }>;
  }>;
}
