import axios from 'axios'
import { handleResponse, defaultOptions, defaultUploadOptions } from './Helper'
import _ from 'lodash'

axios.defaults.headers = {
  'Cache-Control': 'no-cache',
  'app-version': 'muslims-20',
  Pragma: 'no-cache',
  Expires: '0',
}

const readResource = ({ resource, authToken = null, params = null, options = null }) => {
  const selectedOptions = _.isEmpty(options) ? defaultOptions(authToken, params) : options
  return handleResponse(axios.get(`${resource}`, selectedOptions))
}

const deleteResource = ({ authToken, resource, params, options = null }) => {
  const selectedOptions = _.isEmpty(options) ? defaultOptions(authToken, params) : options
  return handleResponse(axios.delete(`${resource}`, selectedOptions))
}

const updateResource = ({ resource, data = null, authToken = null, options = null, params = null }) => {
  const selectedOptions = _.isEmpty(options) ? defaultOptions(authToken, params) : options
  return handleResponse(axios.post(`${resource}`, data, selectedOptions))
}

const createResource = ({ resource, data, authToken = null, options = null, params = null }) => {
  const selectedOptions = _.isEmpty(options) ? defaultOptions(authToken, params) : options
  return handleResponse(axios.put(`${resource}`, data, selectedOptions))
}

const uploadResource = ({ url, authToken, formData }) => {
  return handleResponse(axios.put(url, formData, defaultUploadOptions(authToken)))
}

const uploadResourceWithPost = ({ url, authToken, formData }) => {
  return handleResponse(axios.post(url, formData, defaultUploadOptions(authToken)))
}

export { readResource, deleteResource, updateResource, createResource, uploadResource, uploadResourceWithPost }
