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
  EmptyCartWrapper,
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
    setIsOpen((state) => !state)
  }

  const handleRemoveProduct = (e: MouseEvent, currentProduct: any) => {
    e.preventDefault()

    const currentProductPrice = currentProduct.price
    const formattedPrice = convertPriceInStringToNumber(currentProductPrice)

    const filteredProduct = selectedProduct?.filter(
      (selectedProductItem: any) => selectedProductItem !== currentProduct
    )

    setSelectedProduct!(filteredProduct!)
    setTotalPrice((prevState: number) => prevState - formattedPrice)
  }

  const products = selectedProduct?.map((item: any, index: number) => {
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

          <p className="flag">{index}</p>
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

      {selectedProductLength !== 0 ? (
        <CartList>{products}</CartList>
      ) : (
        <EmptyCartWrapper>
          <Image src="/sad.svg" alt="cart empty" width={170} height={170} />
          <p>Carrinho vazio. Adicione itens!</p>
        </EmptyCartWrapper>
      )}

      <CartInfo>
        <li>
          Quantidade: <strong>{selectedProductLength} itens</strong>
        </li>

        <li>
          Valor total:{' '}
          <strong>
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(totalPrice / 100)}
          </strong>
        </li>
      </CartInfo>

      <CartSubmitBtn>Finalizar compra</CartSubmitBtn>
    </CartWrapper>
  )
}
