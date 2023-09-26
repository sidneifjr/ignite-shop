export type CartContextProps = {
  selectedProduct?: HomeProps
  setSelectedProduct?: React.Dispatch<React.SetStateAction<HomeProps>>
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  totalPrice: number
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>
}

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
