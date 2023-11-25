import { updateResource, readResource } from 'services/NetworkService'
import { ServiceUrls } from '../../constants'

function loginUser(payload) {
  const resource = ServiceUrls.LOGIN_USER
  const headers = {
    'Content-Type': 'application/json',
  }
  return updateResource({
    resource,
    data: payload,
    options: { headers, params: null, timeout: 15000 },
  })
}

function registerUser(data) {
  const resource = ServiceUrls.REGISTER_USER
  return updateResource({ resource, data })
}

function logout() {
  const resource = ServiceUrls.LOGOUT
  const headers = {
    'Content-Type': 'application/json',
    'X-auth-token': 'accessToken',
    'device-identifier': 'identifier',
  }
  return readResource({
    resource,
    options: { headers, params: null, timeout: 15000 },
  })
}

export default {
  registerUser,
  loginUser,
  logout,
}
