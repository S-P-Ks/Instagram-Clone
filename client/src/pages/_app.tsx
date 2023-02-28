import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
      }
    }
  }))

  return <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Hydrate>
  </QueryClientProvider>
}
