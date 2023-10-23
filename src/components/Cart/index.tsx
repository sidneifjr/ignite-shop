import Image from 'next/image'
import { useContext } from 'react'

import { CartContext } from '@/context/CartContext'

import CheckoutBtn from '../CheckoutBtn'
import {
  CartImageWrapper,
  CartInfo,
  CartList,
  CartListItem,
  CartListItemContent,
  CartTitle,
  CartWrapper,
  CloseCartBtn,
  EmptyCartWrapper,
} from './styles'

export const Cart = () => {
  const {
    cart,
    totalPrice,
    isOpen,
    setIsOpen,
    handleCheckoutSession,
    removeProductFromCart,
    // getTotalPrice,
  } = useContext(CartContext)

  // useEffect(() => {
  //   console.log('cart is:', cart)
  //   console.log('cart[0].id is:', cart[0]?.id)
  // }, [cart])

  const cartLength = cart?.length

  const closeHandler = (e: MouseEvent) => {
    e.preventDefault()
    setIsOpen((state) => !state)
  }

  const products = cart?.map((item: any) => {
    return (
      <CartListItem key={item.id}>
        <CartImageWrapper>
          <Image src={item.imageUrl} alt="image" width="94" height="94" />
          {item.amount !== 0 && item.amount !== 1 && (
            <p className="badge">{item.amount}</p>
          )}
        </CartImageWrapper>

        <CartListItemContent>
          <span>{item.name}</span>
          <strong>{item.price}</strong>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              removeProductFromCart(item)
            }}
          >
            Remover
          </a>
        </CartListItemContent>
      </CartListItem>
    )
  })

  return (
    <CartWrapper data-visible={isOpen ? true : false}>
      <CloseCartBtn onClick={(e: any) => closeHandler(e)}>
        <Image src="./close.svg" alt="Close Modal" width="24" height="24" />
      </CloseCartBtn>

      <CartTitle>Sacola de compras</CartTitle>

      {cartLength !== 0 ? (
        <CartList>{products}</CartList>
      ) : (
        <EmptyCartWrapper>
          <Image src="/sad.svg" alt="cart empty" width={170} height={170} />
          <p>Carrinho vazio. Adicione itens!</p>
        </EmptyCartWrapper>
      )}

      <CartInfo>
        <li>
          Quantidade:{' '}
          <strong>
            {cartLength}{' '}
            {cartLength !== 0 && cartLength !== 1 ? 'itens' : 'item'}
          </strong>
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

      <CheckoutBtn
        label="Finalizar compra"
        onClick={() => handleCheckoutSession(cart[0].id)}
      />
    </CartWrapper>
  )
}
