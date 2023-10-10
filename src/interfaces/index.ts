import { Dispatch, SetStateAction } from 'react'

export type IProduct = {
  id: string
  name: string
  imageUrl: string
  price: string
  quantity?: number
}

export type IProducts = {
  filter: any
  quantity: number
  products?: IProduct[]
  map: any
}

export interface HomeProps {
  quantity?: number
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
}

export interface ArrowProps {
  position: 'left' | 'right'
  disabled: boolean
  onClick: () => void
}
