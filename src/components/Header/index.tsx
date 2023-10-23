import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent, useContext } from 'react'

import { CartContext } from '@/context/CartContext'

import { HeaderElement, HeaderWrapper } from './styles'

export const Header = () => {
  const { cart, isOpen, setIsOpen } = useContext(CartContext)

  const cartLength = cart?.length

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

          {cartLength !== 0 && <span>{cartLength}</span>}
        </button>
      </HeaderWrapper>
    </HeaderElement>
  )
}
