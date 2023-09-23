import { MouseEvent, useContext } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CartContext } from '@/context/CartContext';

import {
  CartWrapper,
  CartTitle,
  CloseCartBtn,
  CartImageWrapper,
  CartInfo,
  CartList,
  CartListItem,
  CartListItemContent,
  CartSubmitBtn,
} from './styles';

export const Cart = () => {
  const { selectedProduct, totalPrice, setTotalPrice, isOpen, setIsOpen } =
    useContext(CartContext);

  const closeHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const products = selectedProduct?.map((item) => {
    return (
      <CartListItem key={item.id}>
        <CartImageWrapper>
          <Image
            src={item.imageUrl}
            alt="image"
            width={'94'}
            height={'94'}
          />
        </CartImageWrapper>

        <CartListItemContent>
          <span>{item.name}</span>
          <strong>{item.price}</strong>
          <Link href="#">Remover</Link>
        </CartListItemContent>
      </CartListItem>
    );
  });

  return (
    <CartWrapper data-visible={isOpen ? true : false}>
      <CloseCartBtn onClick={(e) => closeHandler(e)}>
        <Image
          src="./close.svg"
          alt="Close Modal"
          width="24"
          height="24"
        />
      </CloseCartBtn>

      <CartTitle>Sacola de compras</CartTitle>

      <CartList>
        {selectedProduct?.length !== 0
          ? products
          : 'Carrinho vazio. Adicione itens!'}
      </CartList>

      <CartInfo>
        <li>
          Quantidade: <strong>{selectedProduct?.length} itens</strong>
        </li>

        <li>
          Valor total: <strong>R$ {totalPrice}</strong>
        </li>
      </CartInfo>

      <CartSubmitBtn>Finalizar compra</CartSubmitBtn>
    </CartWrapper>
  );
};
