import { fetchJson } from './api'

const CMS_URL = process.env.CMS_URL

export async function getProduct(id) {
  const response = await fetchJson(`${CMS_URL}/products/${id}`)
  return stripProduct(response)
}

export async function getProducts() {
  const products = await fetchJson(`${CMS_URL}/products`)
  return products.map(stripProduct)
}

function stripProduct(product) {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: '$' + product.price.toFixed(2),
    pictureUrl: CMS_URL + product.picture.url,
  }
}
