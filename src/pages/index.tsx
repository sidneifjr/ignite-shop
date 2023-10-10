import { useContext, useState } from 'react'

import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { CartContext } from '@/context/CartContext'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

import { useKeenSlider } from 'keen-slider/react'

import { HomeProps, IProduct } from '@/interfaces'

import { HomeContainer, Product } from '@/styles/pages/home'

import { Arrow } from '@/components/SliderArrow'
import { motion } from 'framer-motion'

import { convertPriceInStringToNumber } from '@/utils'
import 'keen-slider/keen-slider.min.css'

export default function Home({ products }: HomeProps) {
  const { selectedProduct, setSelectedProduct, setTotalPrice } =
    useContext<any>(CartContext)
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

  const handleProductData = (selectedProductId: string) => {
    const myProduct = products?.filter(
      (productsItem: { id: string }) => productsItem.id === selectedProductId
    )[0]

    const myProductPrice = convertPriceInStringToNumber(myProduct.price)

    const checkIfProductAlreadyExists = selectedProduct.find(
      (item: { id: string }) => item.id === selectedProductId
    )

    // console.log(checkIfProductAlreadyExists)
    // console.log(selectedProduct)

    // if (selectedProduct.length) {
    //   const lastItemFromArray = selectedProduct(selectedProduct.length - 1)

    //   // retornar todos os itens que não sejam o último do array.
    //   const test = selectedProduct.filter((item) => item !== lastItemFromArray)

    //   console.log(test)
    // }

    if (checkIfProductAlreadyExists) {
      myProduct.quantity += 1

      if (checkIfProductAlreadyExists !== undefined) {
        // Verificar se o item retornado pelo find é o mesmo adicionado ao final da lista. Se sim, remover.
        selectedProduct.pop()
      }
    }

    setSelectedProduct((prevState: any) => [...prevState, myProduct])
    setTotalPrice((prevState: number) => prevState + myProductPrice)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      {/* <p>{JSON.stringify(selectedProduct)}</p> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
        exit={{ opacity: 0 }}
      >
        <HomeContainer ref={sliderRef} className="keen-slider">
          {products?.map((product: IProduct) => {
            return (
              <Product key={product.id} className="keen-slider__slide">
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

                  <button onClick={() => handleProductData(product.id)}>
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
      </motion.div>
    </>
  )
}

// Tenho duas opções: getServerSideProps (habilita SSR) e getStaticProps (habilita SSG).
// Roda no servidor Node, provisionado pelo Next; útil quando queremos realizar uma chamada de API oculta ao usuário final.
// Posso inserir código de autenticação, acesso a banco de dados, requisições, dados sensíveis, etc.
export const getStaticProps: GetStaticProps = async () => {
  // console.log(await stripe.products.list({}))

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
      quantity: 1,
    }
  })

  return {
    props: {
      products,
    },

    revalidate: 600, // 10 minutos
  }
}
