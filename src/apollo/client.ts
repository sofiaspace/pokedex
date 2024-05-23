"use client";

import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";

const typeDefs = gql`
  extend type Pokemon {
    name: String!
    id: Int!
    sprites: String!
  }
`;

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://beta.pokeapi.co/graphql/v1beta",
    }),
    cache: new InMemoryCache(),
    typeDefs,
  });
};

export default createApolloClient;
