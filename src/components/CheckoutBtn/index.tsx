import Image from 'next/image'
import { useContext } from 'react'

import { CartContext } from '@/context/CartContext'
import { CheckoutBtnProps } from '@/interfaces'

import { Button } from './styles'

export default function CheckoutBtn({ onClick, label }: CheckoutBtnProps) {
  const { isCreatingCheckoutSession } = useContext(CartContext)

  return (
    <Button disabled={isCreatingCheckoutSession} onClick={onClick}>
      {isCreatingCheckoutSession ? (
        <Image src="/loader.svg" alt="loader" width="22" height="22" />
      ) : (
        label
      )}
    </Button>
  )
}
