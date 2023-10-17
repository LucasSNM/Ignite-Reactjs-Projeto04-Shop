
import {
    ProductContainer,
    ImageContainer,
    ProductDetails,
} from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
        defaultPriceId: string;
    }
}

export default function Product({product}: ProductProps) {

  const [isCreatingCheckoutSession, setCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    try{
      setCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout',{
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl

    }
    catch(erro){
      setCreatingCheckoutSession(false)
      alert(`Falha ao realizar o redirecionamento ao checkout! ${erro}`)
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={508} height={488} />
        </ImageContainer>

        <ProductDetails>
          <div>
              <h1>{product.name}</h1>
              <span>{product.price}</span>

              <p>
              {product.description}
              </p>
          </div>

          <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>Comprar agora</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [
        { params: { id: 'prod_MLH5Wy0Y97hDAC' } },
      ],
      fallback: 'blocking',
    }
  }

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({  params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount == null ? 0 : price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hora
  };
};
