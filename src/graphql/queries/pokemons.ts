import gql from "graphql-tag";

export const pokemonsQuery = gql`
  query pokemons($limit: Int) {
    pokemon_v2_pokemon(limit: $limit) {
      id
      name
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
    }
  }
`;
