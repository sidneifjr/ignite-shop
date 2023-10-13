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
}

export interface ArrowProps {
  position: 'left' | 'right'
  disabled: boolean
  onClick: () => void
}
