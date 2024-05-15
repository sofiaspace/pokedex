import { gql } from "@apollo/client";

export const typePokemons = gql`
  type Pokemons {
    name: String!
    id: Int!
    order: Int
  }
`;
