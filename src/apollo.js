import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "https://movieql-gules.now.sh/"
})

export default client;