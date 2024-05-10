"use client";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://beta.pokeapi.co/graphql/v1beta",
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
