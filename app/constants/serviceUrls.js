import configs from 'configs'

const baseUrl = configs.a

const ServiceUrls = {
  REGISTER_USER: `${baseUrl}/public/v1/account/register`,
  LOGIN_USER: `${baseUrl}/api/v1/auth/login`,
  LOGOUT: `${baseUrl}/api/v1/auth/logout`,
}

export default ServiceUrls
