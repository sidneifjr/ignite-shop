// eslint-disable-next-line simple-import-sort/imports
import { ReactNode, createContext, useState } from 'react'

import axios from 'axios'

import { CartContextProps, HomeProps } from '@/interfaces'

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<HomeProps[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleCheckoutSession(defaultPriceId: string) {
    console.log('this is the defaultPriceId:', defaultPriceId)

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

  const addProductToCart = (product: HomeProps) => {
    const existingProduct = cart.find((item) => item.id === product.id)
    if (existingProduct) {
      // If the product is already in the cart, increase its amount
      setCart(
        cart.map((item) =>
          // @ts-ignore
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        )
      )
    } else {
      // If it's a new product, add it to the cart with a amount of 1
      setCart([...cart, { ...product, amount: 1 }])
    }
  }

  const removeProductFromCart = (product: { amount: number; id: any }) => {
    if (product.amount > 1) {
      // If the product's amount is greater than 1, decrease its amount
      setCart(
        cart.map((item) =>
          // @ts-ignore
          item.id === product.id ? { ...item, amount: item.amount - 1 } : item
        )
      )
    } else {
      // If the amount is 1, remove the product from the cart
      const updatedCart = cart.filter((item) => item.id !== product.id)
      setCart(updatedCart)
    }
  }

  // const getTotalPrice = () => {
  //   // console.log('current value of cart is:', cart)
  //   return cart.reduce((total, item) => (total + item.price * item.amount, 0))
  // }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        isOpen,
        setIsOpen,
        totalPrice,
        setTotalPrice,
        isCreatingCheckoutSession,
        setIsCreatingCheckoutSession,
        handleCheckoutSession,
        addProductToCart,
        removeProductFromCart,
        // getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
