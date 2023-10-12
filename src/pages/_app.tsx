import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

import { Cart } from '@/components/Cart'
import { Header } from '@/components/Header'
import { CartProvider } from '@/context/CartContext'
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'

// Deve estar no escopo global, para que tais estilos não sejam carregados novamente em cada página.
globalStyles()

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <CartProvider>
      <Container>
        <Header />

        <Cart />

        <AnimatePresence initial={false} mode="wait">
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </Container>
    </CartProvider>
  )
}
