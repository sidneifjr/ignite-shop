import { useContext, useState } from 'react'

import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { CartContext } from '@/context/CartContext'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

import { useKeenSlider } from 'keen-slider/react'

import { HomeProps } from '@/interfaces'

import { HomeContainer, Product } from '@/styles/pages/home'

import { convertPriceInStringToNumber } from '@/utils'

import { Arrow } from '@/components/SliderArrow'
import 'keen-slider/keen-slider.min.css'

export default function Home({ products }: HomeProps) {
  const { setSelectedProduct, setTotalPrice } = useContext<any>(CartContext)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    defaultAnimation: {
      duration: 600,
    },
    slides: {
      spacing: 48,
      perView: 2.5,
      origin: 'center',
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const handleProductData = (selectedProductIndex: number) => {
    if (products) {
      // @ts-ignore
      const selectedProductData = products[selectedProductIndex]

      const selectedProductDataPrice = selectedProductData.price

      const formattedPrice = convertPriceInStringToNumber(
        selectedProductDataPrice
      )

      setSelectedProduct((prevState: any) => [
        ...prevState,
        selectedProductData,
      ])
      setTotalPrice((prevState: any) => prevState + formattedPrice)
    }
  }

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products?.map((product: any, index: number) => {
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

      {loaded && instanceRef.current && (
        <>
          <Arrow
            position="left"
            onClick={() => instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            position="right"
            onClick={() => instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
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
