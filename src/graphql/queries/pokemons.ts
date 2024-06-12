import gql from "graphql-tag";

export const pokemonsQuery = gql`
  query pokemons($limit: Int) {
    pokemon_v2_pokemon(limit: $limit) {
      id
      name
      height
      weight
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemoncolor {
          name
        }
      }
      pokemon_v2_pokemonsprites_aggregate {
        nodes {
          sprites
        }
      }
      pokemon_v2_pokemontypes_aggregate {
        nodes {
          pokemon_v2_type {
            name
          }
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonmoves {
        pokemon_v2_move {
          name
        }
      }
    }
  }
`;
