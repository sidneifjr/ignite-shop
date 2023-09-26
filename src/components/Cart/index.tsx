import Image from 'next/image'

import { MouseEvent, useContext } from 'react'

import { CartContext } from '@/context/CartContext'

import { convertPriceInStringToNumber } from '@/utils'

import {
  CartImageWrapper,
  CartInfo,
  CartList,
  CartListItem,
  CartListItemContent,
  CartSubmitBtn,
  CartTitle,
  CartWrapper,
  CloseCartBtn,
} from './styles'

export const Cart = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    totalPrice,
    setTotalPrice,
    isOpen,
    setIsOpen,
  } = useContext(CartContext)

  const selectedProductLength = selectedProduct?.length

  const closeHandler = (e: MouseEvent) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  const handleRemoveProduct = (e: MouseEvent, currentProduct: any) => {
    console.log(typeof currentProduct)
    e.preventDefault()

    const currentProductPrice = currentProduct.price
    const formattedPrice = convertPriceInStringToNumber(currentProductPrice)

    const filteredProduct = selectedProduct?.filter(
      (selectedProductItem: any) => selectedProductItem !== currentProduct
    )

    setSelectedProduct!(filteredProduct)
    setTotalPrice((prevState: number) => prevState - formattedPrice)
  }

  const products = selectedProduct?.map((item: any) => {
    return (
      <CartListItem key={item.id}>
        <CartImageWrapper>
          <Image src={item.imageUrl} alt="image" width="94" height="94" />
        </CartImageWrapper>

        <CartListItemContent>
          <span>{item.name}</span>
          <strong>{item.price}</strong>
          <a href="#" onClick={(e) => handleRemoveProduct(e, item)}>
            Remover
          </a>
        </CartListItemContent>
      </CartListItem>
    )
  })

  return (
    <CartWrapper data-visible={isOpen ? true : false}>
      <CloseCartBtn onClick={(e) => closeHandler(e)}>
        <Image src="./close.svg" alt="Close Modal" width="24" height="24" />
      </CloseCartBtn>

      <CartTitle>Sacola de compras</CartTitle>

      <CartList>
        {selectedProductLength !== 0 ? (
          products
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            <Image src="/sad.svg" alt="cart empty" width={170} height={170} />
            <p>Carrinho vazio. Adicione itens!</p>
          </div>
        )}
      </CartList>

      <CartInfo>
        <li>
          Quantidade: <strong>{selectedProductLength} itens</strong>
        </li>

        <li>
          Valor total: <strong>R$ {totalPrice}</strong>
        </li>
      </CartInfo>

      <CartSubmitBtn>Finalizar compra</CartSubmitBtn>
    </CartWrapper>
  )
}
