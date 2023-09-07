import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'

// Deve estar no escopo global, para que tais estilos não sejam carregados novamente em cada página.
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
