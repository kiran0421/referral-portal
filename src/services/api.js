import axios from 'axios'

const productsApi = axios.create({ baseURL: 'https://dummyjson.com' })

export const getProducts = async () => {
  const { data } = await productsApi.get('/products')
  return data.products
}
export const getUsers = async () => {
  throw new Error('#')
}
export const getCurrencies = async () => {
  throw new Error('#')
}

export const getRates = async (base) => {
  throw new Error('#')
}

export default productsApi