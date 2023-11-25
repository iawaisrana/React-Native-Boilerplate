const parseSuccess = ({ data, headers }) => ({ ...data, headers, ok: true })

const parseError = ({ response }) => {
  let message = 'Check your network connection and try again.'
  let status = 408
  if (response && response.data) {
    const { data } = response
    message = data.message
    status = data.code
  }

  return { status, message }
}

export default {
  parseSuccess,
  parseError,
}
