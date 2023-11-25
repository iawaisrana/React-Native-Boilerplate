import { Platform } from 'react-native'
import ResponseService from './ResponseService'
import FormData from 'form-data'
import NetInfo from '@react-native-community/netinfo'

const timeout = 15000 // Set timeout from config

const defaultOptions = (authToken = null, params = null) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  if (authToken) {
    headers['X-auth-token'] = authToken
  }

  return {
    timeout,
    headers,
    params,
  }
}

const defaultUploadOptions = (authToken) => ({
  timeout,
  headers: {
    'X-Auth-Token': authToken,
    'Content-Type': 'multipart/form-data',
  },
})

const createFormData = (data) => {
  const form = new FormData()
  form.append('file', {
    uri: Platform.OS === 'android' ? data.uri : data.uri.replace('file://', ''),
    type: 'image/jpeg',
    name: 'image.jpg',
  })

  // const buffer = Buffer.from(base64, 'base64')
  // form.append('file', buffer)
  return form
}

const handleResponse = (responsePromise) => {
  return NetInfo.fetch().then((state) => {
    if (state.isConnected) {
      return responsePromise
        .then((response) => {
          return ResponseService.parseSuccess(response)
        })
        .catch((error) => {
          return ResponseService.parseError(error)
        })
    }

    return {
      ok: false,
      message: 'Check your network connection and try again.',
      status: 408,
    }
  })
}

export { defaultOptions, defaultUploadOptions, createFormData, handleResponse }
