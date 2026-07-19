import { useEffect, useState } from 'react'
import { getGeoLocation, getRates } from '../services/api'
import { COUNTRY_CURRENCY_MAP } from './countryCurrencyMap'

const FALLBACK_CURRENCY = 'usd'
const FALLBACK_RATE = 1


const getCurrencyOverrideFromUrl = () => {
  const params = new URLSearchParams(window.location.search)
  const override = params.get('currency')
  return override ? override.toLowerCase() : null
}


export const useGeoCurrency = () => {
  const [currency, setCurrency] = useState(FALLBACK_CURRENCY)
  const [rate, setRate] = useState(FALLBACK_RATE)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false

    const detectCurrency = async () => {
      try {
        const override = getCurrencyOverrideFromUrl()

        if (override) {
          console.log('[useGeoCurrency] using URL override:', override)
          setCurrency(override)
          if (override !== FALLBACK_CURRENCY) {
            const rates = await getRates(FALLBACK_CURRENCY)
            if (!ignore && rates?.[override]) setRate(rates[override])
          }
          return
        }

        const geo = await getGeoLocation()
        const code = COUNTRY_CURRENCY_MAP[geo?.country_code]

        if (!code || ignore) return

        setCurrency(code)

        if (code !== FALLBACK_CURRENCY) {
          const rates = await getRates(FALLBACK_CURRENCY)
          if (!ignore && rates?.[code]) setRate(rates[code])
        }
      } catch (err) {
        console.warn('[useGeoCurrency] detection failed, falling back to USD:', err)
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    detectCurrency()

    return () => {
      ignore = true
    }
  }, [])

  return { currency, rate, loading }
}