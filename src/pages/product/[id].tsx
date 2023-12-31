import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import Stripe from 'stripe'

import CheckoutBtn from '@/components/CheckoutBtn'
import { MotionWrapper } from '@/components/MotionWrapper'
import { CartContext } from '@/context/CartContext'
import { ProductProps } from '@/interfaces'
import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_ObQs7vu22lgsww' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params?.id)
  // console.log('productId is:', productId)

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

// Utiliza os dados (product) provenientes do getStaticProps.
export default function Product({ product }: ProductProps) {
  const { handleCheckoutSession } = useContext(CartContext)

  // console.log(product, product.id)

  const pageTitle = `${product?.name} | Ignite Shop`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <MotionWrapper
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

            <CheckoutBtn
              label="Comprar agora"
              onClick={() => handleCheckoutSession(product?.defaultPriceId)}
            />
          </ProductDetails>
        </ProductContainer>
      </MotionWrapper>
    </>
  )
}
