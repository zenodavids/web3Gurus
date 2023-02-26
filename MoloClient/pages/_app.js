import { ApolloProvider } from '@apollo/client'
import client from '../constants/graphQLClient'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-[#1a1c1f]'>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  )
}

export default MyApp
