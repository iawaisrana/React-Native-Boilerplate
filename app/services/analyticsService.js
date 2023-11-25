import analytics from '@react-native-firebase/analytics'

const logScreen = async (currentScreenName) => {
  try {
    await analytics().logScreenView({
      screen_name: currentScreenName,
      screen_class: currentScreenName,
    })
  } catch (error) {
    console.error('Error logging screen:', error)
  }
}

const logEvent = async (name, properties) => {
  try {
    await analytics().logEvent(name, properties)
  } catch (error) {
    console.error('Error logging event:', error)
  }
}

const logUserProperties = async (userType, accountType, userId) => {
  try {
    await analytics().setUserId(String(userId))
    await analytics().setUserProperties({
      user_type: userType,
      account_type: accountType,
    })
  } catch (error) {
    console.error('Error logging user properties:', error)
  }
}

const logUserProperty = async (name, value) => {
  try {
    await analytics().setUserProperty(name, value)
  } catch (error) {
    console.error('Error logging user property:', error)
  }
}

export default { logScreen, logEvent, logUserProperties, logUserProperty }
