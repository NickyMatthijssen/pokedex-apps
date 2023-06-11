"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
  uri: "https://beta.pokeapi.co/graphql/v1beta",
});

export default function GraphqlProvider({
  children,
}: React.PropsWithChildren): React.ReactElement {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
