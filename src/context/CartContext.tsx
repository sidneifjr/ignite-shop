import { createContext, ReactNode, useState } from 'react'

import { CartContextProps, HomeProps } from '@/interfaces'

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<HomeProps[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  return (
    <CartContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        isOpen,
        setIsOpen,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
