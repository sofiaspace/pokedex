import gql from "graphql-tag";

export const pokemonsQuery = gql`
  query pokemons {
    pokemon_v2_pokemon {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;
