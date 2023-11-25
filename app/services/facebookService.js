import { Settings, LoginManager } from 'react-native-fbsdk-next'
import Config from 'react-native-config'

Settings.initializeSDK()
Settings.setAppID(Config.FacebookAppID)
Settings.setAppName(Config.AppName)

const signInAsync = async () => {
  try {
    const { type, token } = await LoginManager.logInWithPermissions(['public_profile', 'email'])

    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=email,name`)
      const responseData = await response.json()

      if (responseData?.email) {
        return { user: responseData, type, token }
      } else {
        throw new Error('Email not available in the Facebook response.')
      }
    } else if (type !== 'cancel') {
      throw new Error('Facebook login failed.')
    }
  } catch (error) {
    console.error('Error during Facebook login:', error)
    return { type: 'failure', message: error.message || 'Something went wrong' }
  }
}

const signOutAsync = async () => {
  try {
    LoginManager.logOut()
    return { type: 'success' }
  } catch (error) {
    console.error('Error during Facebook logout:', error)
    return { type: 'failure', message: error.message || 'Something went wrong' }
  }
}

export default { signInAsync, signOutAsync }
