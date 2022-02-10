import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App'
import { ProductProvider } from './contexts/products_context'

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_API,
  cache,
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ProductProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ProductProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
