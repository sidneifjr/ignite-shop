import { Dispatch, SetStateAction } from 'react'

export type IProduct = {
  id: string
  name: string
  imageUrl: string
  price: string
  amount?: number
}

export type IProducts = {
  filter: any
  amount: number
  products?: IProduct[]
  map: any
}

export interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export interface HomeProps {
  defaultPriceId: any
  amount?: number
  products?: IProducts
  length: number
  filter: any
  map: any
  productsInMerchandise: any
  productsInClothing: any
}

export type CartContextProps = {
  selectedProduct?: HomeProps[]
  setSelectedProduct?: Dispatch<SetStateAction<HomeProps[]>>
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  totalPrice: number
  setTotalPrice: Dispatch<SetStateAction<number>>
  isCreatingCheckoutSession: boolean
  setIsCreatingCheckoutSession: Dispatch<SetStateAction<any>>
  handleCheckoutSession: (defaultPriceId: string) => void
  addProductToCart: (item: any, products: any) => void
  removeProductFromCart: (item: any) => void
}

export interface CheckoutBtnProps {
  onClick?: (props: any) => void
  label: string
}
