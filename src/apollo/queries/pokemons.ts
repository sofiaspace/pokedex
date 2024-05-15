import gql from "graphql-tag";

export const pokemonsQuery = gql`
  query pokemons($limit: Int) {
    pokemon_v2_pokemon(limit: 1000) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;
