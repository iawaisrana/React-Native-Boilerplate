import React, { useMemo } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthConnect from 'redux/store/user/connect'
import ThemeConnect from 'redux/store/theme/connect'
import AppButton from 'components/AppButton'
import { getThemeStyles } from 'theme'
import { withTheme } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

const AuthScreen = ({ googleLoginRequest, facebookLoginRequest }) => {
  const darkMode = useSelector((state) => state.theme.darkMode)
  const themeStyles = useMemo(() => getThemeStyles(darkMode), [darkMode])

  const [t, i18n] = useTranslation()

  const i18 = (key) => {
    return t(key)
  }

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.container.backgroundColor }]}>
      <View style={styles.buttonContainer}>
        <AppButton onPress={googleLoginRequest} title={i18('Auth.continueWithGoogle')} />
        <View style={styles.separator} />
        <AppButton onPress={facebookLoginRequest} title={i18('Auth.continueWithFacebook')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '90%',
  },
  separator: {
    height: 24,
  },
})

export default withTheme(ThemeConnect(AuthConnect()(AuthScreen)))
