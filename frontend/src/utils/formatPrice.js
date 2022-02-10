const regionConfig = {
  'us': {
    format: 'en-US',
    currency: 'USD'
  }
}

const formatPrice = (value, region = 'us') => {
  return new Intl.NumberFormat(regionConfig[region].format, {
    style: 'currency',
    currency: regionConfig[region].currency,
  }).format(value)
}

export default formatPrice