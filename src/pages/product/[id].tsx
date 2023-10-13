import axios from 'axios'
import { motion } from 'framer-motion'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import Stripe from 'stripe'

import CheckoutBtn from '@/components/CheckoutBtn'
import { CartContext } from '@/context/CartContext'
import { ProductProps } from '@/interfaces'
import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

export default function Product({ product }: ProductProps) {
  const { setIsCreatingCheckoutSession } = useContext(CartContext)

  const pageTitle = `${product?.name} | Ignite Shop`

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product?.defaultPriceId,
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry).
      setIsCreatingCheckoutSession(false)
      console.error('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <motion.div
        initial={{ y: '25%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
        style={{ margin: '0 auto' }}
        exit={{ y: '-25%', opacity: 0 }}
      >
        <ProductContainer>
          <ImageContainer>
            <Image src={product?.imageUrl} width={520} height={480} alt="" />
          </ImageContainer>

          <ProductDetails>
            <h1>{product?.name}</h1>
            <span>{product?.price}</span>

            <p>{product?.description}</p>

            <CheckoutBtn label="Comprar agora" onClick={handleBuyProduct} />
          </ProductDetails>
        </ProductContainer>
      </motion.div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_ObQs7vu22lgsww' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params?.id)

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product?.default_price as Stripe.Price
  const priceUnit = price.unit_amount as number

  return {
    props: {
      product: {
        id: product?.id,
        name: product?.name,
        imageUrl: product?.images[0],
        price: new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }).format(priceUnit / 100),
        description: product?.description,
        defaultPriceId: price.id,
        amount: 1,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
