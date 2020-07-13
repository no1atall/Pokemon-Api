import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import { PokemonContainer } from "./containers/PokemonContainer";

export function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh",
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonContainer></PokemonContainer>
      </main>
    </ApolloProvider>
  );
}

export default App;
