import { GraphQLClient } from "graphql-request"
import { QueryClient } from "react-query"

import { getSdk } from "./generated/graphql"

const gqlClient = new GraphQLClient("http://localhost:4000/graphql", {
    credentials: 'include',
})
export const { Login, SignUp } = getSdk(gqlClient)

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false
        },
    }
})