import axios from 'axios'
import { createContext, ReactNode, useState } from 'react'

import { CartContextProps, HomeProps } from '@/interfaces'
import { convertPriceInStringToNumber } from '@/utils'

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<HomeProps[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleCheckoutSession(defaultPriceId: string) {
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

  const addProductToCart = (selectedProductId: string, products: any) => {
    const myProduct = products?.filter(
      (productsItem: { id: string }) => productsItem.id === selectedProductId
    )[0]

    const myProductPrice = convertPriceInStringToNumber(myProduct.price)

    const checkIfProductAlreadyExists = selectedProduct.find(
      (item: any) => item.id === selectedProductId
    )

    if (checkIfProductAlreadyExists) {
      myProduct.amount += 1

      if (checkIfProductAlreadyExists !== undefined) {
        // Verificar se o item retornado pelo find é o mesmo adicionado ao final da lista. Se sim, remover.
        selectedProduct.pop()
      }
    }

    setSelectedProduct((prevState: any) => [...prevState, myProduct])
    setTotalPrice((prevState: number) => prevState + myProductPrice)
  }

  const removeProductFromCart = (e: MouseEvent, currentProduct: any) => {
    e.preventDefault()

    const currentProductPrice = convertPriceInStringToNumber(
      currentProduct.price
    )

    // if (currentProduct.amount > 1) {
    //   currentProduct.amount -= 1
    // }

    const filteredProductList = selectedProduct?.filter(
      (selectedProductItem: any) => selectedProductItem !== currentProduct
    )

    setSelectedProduct!(filteredProductList!)
    setTotalPrice((prevState: number) => prevState - currentProductPrice)
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
        handleCheckoutSession,
        removeProductFromCart,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
