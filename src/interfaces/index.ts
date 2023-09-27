import { Dispatch, SetStateAction } from 'react'

export interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
  length: number
  filter: any
  map: any
}

export type CartContextProps = {
  selectedProduct?: HomeProps
  setSelectedProduct?: Dispatch<SetStateAction<HomeProps>>
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  totalPrice: number
  setTotalPrice: Dispatch<SetStateAction<number>>
}

export interface ArrowProps {
  position: string
  disabled: boolean
  onClick: (e: MouseEvent) => void
}
