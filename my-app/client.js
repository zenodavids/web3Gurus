import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://thegraph.com/explorer/subgraph/zenodavids/decentralizedyoutube',
  cache: new InMemoryCache(),
})

export default client
