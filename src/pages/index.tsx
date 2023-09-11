import { useEffect, useState } from "react"
import Image from "next/image"
import { stripe } from "@/lib/stripe"
import { GetServerSideProps } from "next"

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from "@/styles/pages/home"

import camiseta1 from '../assets/carousel/1.png'
import camiseta2 from '../assets/carousel/2.png'
import camiseta3 from '../assets/carousel/3.png'

import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [list, setList] = useState<number[]>([])

  const [ sliderRef ] = useKeenSlider({
    slides: {
      spacing: 48,
      perView: 3,
    }
  })

  useEffect(() => {
    setTimeout(() => {
      console.log('rodou')

      setList([1,2,3])
    }, 2000)
  }, [])

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageUrl} alt="" width={520} height={480} />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}
      {/* <pre>{JSON.stringify(products)}</pre> */}
    </HomeContainer>
  )
}

// Roda no servidor Node, provisionado pelo Next; útil quando queremos realizar uma chamada de API oculta ao usuário final.
// Posso inserir código de autenticação, acesso a banco de dados, requisições, dados sensíveis, etc.
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  console.log(response.data)

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    }
  })

  return {
    props: {
      products
    }
  }
}
