import { MouseEvent, useContext } from 'react'
import Image from 'next/image'

import { CartContext } from '@/context/CartContext'

import { HeaderWrapper } from './styles'
import Link from 'next/link'

export const Header = () => {
  const { selectedProduct, isOpen, setIsOpen } = useContext(CartContext)

  const openHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
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

        <span>{selectedProduct?.length | 0}</span>
      </button>
    </HeaderWrapper>
  )
}
