import { Dispatch, SetStateAction } from 'react'

export type Products = {
  products?: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export interface HomeProps {
  products?: Products
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
}

export interface ArrowProps {
  position: 'left' | 'right'
  disabled: boolean
  onClick: () => void
}
