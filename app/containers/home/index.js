import React, { useMemo } from 'react'
import { View, Text, StyleSheet, I18nManager } from 'react-native'
import AppButton from 'components/AppButton'
import ThemeConnect from 'redux/store/theme/connect'
import { getThemeStyles } from 'theme'
import { withTheme } from 'react-native-paper'
import { useTranslation } from 'react-i18next'
import RNRestart from 'react-native-restart'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = ({ toggleTheme }) => {
  const darkMode = useSelector((state) => state.theme.darkMode)

  const [t, i18n] = useTranslation()

  const i18 = (key) => {
    return t(key)
  }

  const restartApp = async (language, isRTL) => {
    await AsyncStorage.setItem('language', language)
    I18nManager.forceRTL(isRTL)
    RNRestart.Restart()
  }

  const changeLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem('language')
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en'
    const isRTL = newLanguage === 'ar' // Adjust this condition based on your RTL languages

    await restartApp(newLanguage, isRTL)
  }

  const handleChangeLanguage = () => {
    changeLanguage()
  }

  const themeStyles = useMemo(() => getThemeStyles(darkMode), [darkMode])

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.container.backgroundColor }]}>
      <View style={styles.header}>
        <Text style={[styles.appName, { color: themeStyles.text.color }]}>{i18('Home.title')}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.randomText, { color: themeStyles.text.color }]}>{i18('Home.welcome')}</Text>
        <Text style={[styles.randomText, { color: themeStyles.text.color }]}>{i18('Home.explore')}</Text>
        <Text style={[styles.randomText, { color: themeStyles.text.color }]}>{i18('Home.haveFun')}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton onPress={handleChangeLanguage} title={i18('Home.changeLang')} />
        <View style={styles.separator} />
        <AppButton onPress={toggleTheme} title={i18('Home.toggleTheme')} />
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
  header: {
    marginBottom: 30,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textContainer: {
    marginBottom: 20,
    width: '100%',
  },
  randomText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
  separator: {
    height: 24,
  },
})

export default withTheme(ThemeConnect(HomeScreen))
