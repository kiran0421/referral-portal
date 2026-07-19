import axios from 'axios'

const productsApi = axios.create({ baseURL: 'https://dummyjson.com' })
const geoApi = axios.create({ baseURL: 'https://ipwho.is' })
const currencyApi = axios.create({
  baseURL: 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1',
})
export const getProducts = async () => {
  const { data } = await productsApi.get('/products')
  return data.products
}
export const getUsers = async () => {
  const { data } = await productsApi.get('/users')
  return data.users
}
export const getGeoLocation = async () => {
  const { data } = await geoApi.get('/')
  return data
}

export const getCurrencies = async () => {
  const { data } = await currencyApi.get('/currencies.json')
  return data
}

export const getRates = async (base = 'usd') => {
  const { data } = await currencyApi.get(`/currencies/${base}.json`)
  return data[base]
}

export default productsApi