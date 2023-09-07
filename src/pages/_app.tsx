import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'

import logoImg from '../assets/ignite-shop-logo.svg'

// Deve estar no escopo global, para que tais estilos não sejam carregados novamente em cada página.
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="logo" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
