import { PropsWithChildren } from 'react'
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client'
// import { RestLink } from 'apollo-link-rest'

import { baseUrl, getAuthToken } from '@/common/request'

const hausraSecret = import.meta.env.VITE_HASURA_ADMIN_SECRET

const httpLink = new HttpLink({ uri: `${baseUrl}/v1/graphql` })

// const restUrlBase = `${baseUrl}/api`

// const renderLink = new RestLink({
//   uri: restUrlBase,
// })

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'x-hasura-admin-secret': hausraSecret,
      authorization: getAuthToken(),
    },
  }))

  return forward(operation)
})

export const graphQLClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authMiddleware, httpLink]),
})

export const RequestProvider = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  return <ApolloProvider client={graphQLClient}>{children}</ApolloProvider>
}
