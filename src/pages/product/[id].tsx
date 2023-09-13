import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
// import { useRouter } from "next/router"

export default function Product() {
  // const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis delectus omnis officiis debitis quasi rerum aspernatur exercitationem, molestias dolore, dicta id ex deserunt magni nulla, sapiente suscipit officia vel? Recusandae.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}