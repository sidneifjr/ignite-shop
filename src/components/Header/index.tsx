import Image from 'next/image'
import { MouseEvent, useContext } from 'react'

import { CartContext } from '@/context/CartContext'

import Link from 'next/link'
import { HeaderElement, HeaderWrapper } from './styles'

export const Header = () => {
  const { selectedProduct, isOpen, setIsOpen } = useContext(CartContext)

  const selectedProductLength = selectedProduct?.length

  const openHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <HeaderElement>
      <HeaderWrapper>
        <Link href="/">
          <Image
            src={'./ignite-shop-logo.svg'}
            width={130}
            height={52}
            alt="logo"
          />
        </Link>

        <button onClick={(e) => openHandler(e)}>
          <Image width={24} height={24} src="./bag.svg" alt="" />

          {selectedProductLength && <span>{selectedProductLength}</span>}
        </button>
      </HeaderWrapper>
    </HeaderElement>
  )
}
