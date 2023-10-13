import axios from 'axios'
import { createContext, ReactNode, useState } from 'react'

import { CartContextProps, HomeProps } from '@/interfaces'

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<HomeProps[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProduct(defaultPriceId: string) {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: defaultPriceId,
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry).
      setIsCreatingCheckoutSession(false)
      console.error('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <CartContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        isOpen,
        setIsOpen,
        totalPrice,
        setTotalPrice,
        isCreatingCheckoutSession,
        setIsCreatingCheckoutSession,
        handleBuyProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
