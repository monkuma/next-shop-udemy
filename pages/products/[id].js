import Head from 'next/head'
import { getProduct, getProducts } from '../../lib/products'
import Title from '../../components/Title'
import { ApiError } from '../../lib/api'
import Image from 'next/image'

export async function getStaticPaths() {
  const products = await getProducts()
  return {
    paths: products.map((product) => ({
      params: {
        id: product.id.toString(),
      },
    })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params: { id } }) {
  try {
    const product = await getProduct(id)
    return {
      props: { product },
      revalidate: parseInt(process.env.REVALiDATE_SECONDES),
    }
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return { notFound: true }
    }
    throw error
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
        <div className="flex flex-col lg:flex-row">
          <div>
            <Image src={product.pictureUrl} alt="" width={640} height={480} />
          </div>
          <div className="flex-1 lg:ml-4">
            <p className="text-sm">{product.description}</p>
            <p className="text-lg font-bold">{product.price}</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductPage
