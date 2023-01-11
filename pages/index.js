import { getProducts } from '../lib/products'
import ProductCard from '../components/ProductCard'
import Page from '../components/Page'

export async function getStaticProps() {
  const products = await getProducts()
  return {
    props: { products },
    revalidate: parseInt(process.env.REVALiDATE_SECONDES),
  }
}
export default function HomePage({ products }) {
  return (
    <>
      <Page title="Indoor Plants">
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </Page>
    </>
  )
}
