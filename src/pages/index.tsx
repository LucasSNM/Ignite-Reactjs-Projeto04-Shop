import { styled } from "@/styles";
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'


import { stripe } from "@/lib/stripe";
import { GetServerSideProps, GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";

interface HomeProps{
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: string;
  }[]
}

export default function Home({products}: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>

      {products.map(product => {
        return(
          <Link
            href={`/product/${product.id}`}
            key={product.id} 
          >
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={508} height={488} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
              </footer>
            </Product>
          </Link>
        )
      })}

    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount == null ? 0 : price.unit_amount / 100),
    }

  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 horas
  }

}