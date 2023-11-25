import stagingConfig from './staging'
import productionConfig from './production'

const getConfig = () => {
  const flavor = global.__FLAVOR__
  switch (flavor) {
    case 'staging':
      return stagingConfig
    case 'production':
      return productionConfig
    default:
      throw new Error(`Unsupported flavor: ${flavor}`)
  }
}

export default getConfig()
