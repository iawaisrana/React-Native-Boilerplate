import { GoogleSignin } from '@react-native-google-signin/google-signin'

GoogleSignin.configure()

const signInAsync = async () => {
  try {
    await GoogleSignin.hasPlayServices()
    const result = await GoogleSignin.signIn()
    return result
  } catch (error) {
    console.error('Error during Google Sign-In:', error)
    return { type: 'failure', message: error.message || 'Something went wrong' }
  }
}

const signOutAsync = async () => {
  try {
    await GoogleSignin.signOut()
    return { type: 'success' }
  } catch (error) {
    console.error('Error during Google Sign-Out:', error)
    return { type: 'failure', message: error.message || 'Something went wrong' }
  }
}

export default { signInAsync, signOutAsync }
