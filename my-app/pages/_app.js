import { ApolloProvider } from '@apollo/client'
import client from '../utils/gqlClient'
import '../styles/globals.css'
// import { LivepeerConfig } from '@livepeer/react'
// import LivePeerClient from '../livepeer'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
