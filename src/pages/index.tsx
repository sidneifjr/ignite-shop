import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import Stripe from 'stripe'

import { MotionWrapper } from '@/components/MotionWrapper'
import { CartContext } from '@/context/CartContext'
import { HomeProps, IProduct } from '@/interfaces'
import { stripe } from '@/lib/stripe'
import { HomeContainer, Product } from '@/styles/pages/home'

// Tenho duas opções: getServerSideProps (habilita SSR) e getStaticProps (habilita SSG).
// Roda no servidor Node, provisionado pelo Next; útil quando queremos realizar uma chamada de API oculta ao usuário final.
// Posso inserir código de autenticação, acesso a banco de dados, requisições, dados sensíveis, etc.
export const getStaticProps: GetStaticProps = async () => {
  // const productsPerCategory = categories.map(async (productCategoriesItem) => {
  //   return await stripe.products.search({
  //     query: `"metadata['category']:'${productCategoriesItem}'"`,
  //   })
  // })

  // const productsInMerchandise = await stripe.products.search({
  //   query: "metadata['category']:'merchandise'",
  // })

  // const productsInClothing = await stripe.products.search({
  //   query: "metadata['category']:'clothing'",
  // })

  // console.log('productsInMerchandise is:', productsInMerchandise.data)
  // console.log('productsInClothing is:', productsInClothing.data)

  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    const priceUnit = price.unit_amount as number

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(priceUnit / 100),
      amount: 1,
    }
  })

  return {
    props: {
      products,
      // productsInMerchandise,
      // productsInClothing,
    },

    revalidate: 600, // 10 minutos
  }
}

export default function Home({
  products, // productsInMerchandise,
  // productsInClothing,
}: HomeProps) {
  const { addProductToCart } = useContext<any>(CartContext)
  // console.log(productsInMerchandise)
  // console.log(productsInClothing)

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer>
        <MotionWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
          exit={{ opacity: 0 }}
          style={{ all: 'inherit' }}
        >
          {products?.map((product: IProduct) => {
            return (
              <Product key={product.id}>
                <Link href={`/product/${product.id}`} prefetch={false}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={520}
                    height={480}
                    priority={true}
                  />
                </Link>

                <footer>
                  <section>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </section>

                  <button onClick={() => addProductToCart(product, products)}>
                    <Image width={32} height={32} src="./bag.svg" alt="" />
                  </button>
                </footer>
              </Product>
            )
          })}
        </MotionWrapper>
      </HomeContainer>
    </>
  )
}
