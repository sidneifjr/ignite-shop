import { useContext } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { CartContext } from '@/context/CartContext'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import { useKeenSlider } from 'keen-slider/react'

import { HomeProps } from '@/interfaces/interfaces'

import { HomeContainer, Product } from '@/styles/pages/home'

import 'keen-slider/keen-slider.min.css'

export default function Home({ products }: HomeProps) {
  const { selectedProduct, setSelectedProduct, totalPrice, setTotalPrice } =
    useContext<any>(CartContext)

  const [sliderRef] = useKeenSlider({
    slides: {
      spacing: 48,
      perView: 1.8,
      // configurar para, quando o item ativo nao for o primeiro slider, centralizar os slides.
      // origin: 'center',
    },
  })

  const handleProductData = (selectedProductIndex: number) => {
    const selectedProductData = products[selectedProductIndex]

    const selectedProductDataPrice = parseInt(
      selectedProductData.price.replace('R$', '')
    )

    setSelectedProduct((prevState: any) => [...prevState, selectedProductData])
    setTotalPrice((prevState: any) => prevState + selectedProductDataPrice)
  }

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product, index) => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                prefetch={false}
              >
                <Image
                  src={product.imageUrl}
                  alt=""
                  width={520}
                  height={480}
                  // placeholder="blur"
                />
              </Link>

              <footer>
                <section>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </section>

                <button onClick={() => handleProductData(index)}>
                  <Image width={32} height={32} src="./bag.svg" alt="" />
                </button>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

// Tenho duas opções: getServerSideProps (habilita SSR) e getStaticProps (habilita SSG).
// Roda no servidor Node, provisionado pelo Next; útil quando queremos realizar uma chamada de API oculta ao usuário final.
// Posso inserir código de autenticação, acesso a banco de dados, requisições, dados sensíveis, etc.
export const getStaticProps: GetStaticProps = async () => {
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
    }
  })

  return {
    props: {
      products,
    },

    revalidate: 60 * 60 * 2, // 2 hours
  }
}
