import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

import { MotionWrapper } from '@/components/MotionWrapper'
import { SuccessProps } from '@/interfaces'
import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ImageHolder,
  SuccessContainer,
} from '@/styles/pages/success'

export default function Success({ customerName, products }: SuccessProps) {
  const productsLength = products.length

  return (
    <>
      <Head>
        <title> Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
        {/* Evita que os crawlers indexem essa tela. */}
      </Head>

      <SuccessContainer>
        <MotionWrapper
          initial={{ y: '25%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
          style={{ margin: '0 auto', all: 'inherit' }}
          exit={{ y: '-25%', opacity: 0 }}
        >
          <ImageHolder>
            {products.map((product, index) => {
              return (
                <ImageContainer key={index}>
                  <Image
                    src={product.images[0]}
                    alt=""
                    width={130}
                    height={142}
                  />
                </ImageContainer>
              )
            })}
          </ImageHolder>

          <h1>Compra efetuada!</h1>

          <p>
            Uhuul <strong>{customerName}</strong>,{' '}
            {productsLength > 1 ? `seus pedidos` : `seu pedido`}
            {products.map((product, index) => {
              return (
                <strong key={index} style={{ display: 'block' }}>
                  {product.name}
                  {index % 2 === 0 ? ',' : ''}
                </strong>
              )
            })}
            já {productsLength > 1 ? `estão` : `está`} a caminho da sua casa.
          </p>

          <Link href="/">Voltar ao catálogo </Link>
        </MotionWrapper>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false, // o redirect não é permanente, ocorrendo apenas quando não houver o session_id.
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name

  const products = session.line_items?.data.map((item) => {
    return item?.price?.product as Stripe.Product
  })

  return {
    props: {
      customerName,
      products: products,
    },
  }
}
