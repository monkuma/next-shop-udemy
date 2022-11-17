import Head from 'next/head'
import { getProducts } from '../components/products'
import Title from '../components/Title'

export async function getStaticProps() {
  console.log('HomePage getStaticProps : ')
  const products = await getProducts()
  return {
    props: { products },
    revalidate: 30,
  }
}
export default function HomePage({ products }) {
  console.log('HomePage getStaticProps : ', products)

  return (
    <>
      <Head>
        <title>Next.js SHOP</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next.js SHOP</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  )
}
