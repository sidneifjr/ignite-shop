import { ReactNode, createContext, useState } from 'react';

import { HomeProps } from '@/interfaces/interfaces';

type CartContextProps = {
  selectedProduct?: HomeProps;
  setSelectedProduct?: React.Dispatch<React.SetStateAction<string | boolean>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<string | boolean>>;
};

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<HomeProps>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

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
  );
}
