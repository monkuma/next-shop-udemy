import Head from 'next/head'
import { getProduct, getProducts } from '../../components/products'
import Title from '../../components/Title'

export async function getStaticPaths() {
  const products = await getProducts()
  return {
    paths: products.map((product) => ({
      params: {
        id: product.id.toString(),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params: { id } }) {
  const product = await getProduct(id)
  return {
    props: { product },
    revalidate: 30,
  }
}
function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>Next.js SHOP</title>
      </Head>
      <main className="px-6 py-4">
        <Title>{product.title}</Title>
        <p>{product.description}</p>
      </main>
    </>
  )
}

export default ProductPage
