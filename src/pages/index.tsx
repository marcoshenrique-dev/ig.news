import Head from "next/head";
import Image from "next/image";
import {GetStaticProps} from "next";

import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";
import {stripe} from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product} : HomeProps) {
  return (
    <>
    <Head>
      <title>Home | ig.news</title>
      </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, welcome</span>
        <h1>News about the <span>React </span>world.</h1>
        <p>
          Get access to all The publications <br />
          <span>for {product.amount} month</span>
        </p>
        <SubscribeButton priceId={product.priceId} />
      </section>

      <Image width={800} height={800} src="/images/avatar.svg" alt="Girl Coding" />
    </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {

  const price = await stripe.prices.retrieve("price_1JFq5tEz7ASzIDdtnmNI3LIQ");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100)
  };

  return {
    props: {
    product,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  }
}