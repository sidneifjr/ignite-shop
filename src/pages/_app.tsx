import type { AppProps } from 'next/app'
import { Cart } from '@/components/Cart'
import { CartProvider } from '@/context/CartContext'

import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import { Header } from '@/components/Header'

// Deve estar no escopo global, para que tais estilos não sejam carregados novamente em cada página.
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Container>
        <Header />

        <Cart />

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
