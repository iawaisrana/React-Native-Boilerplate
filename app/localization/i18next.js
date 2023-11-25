import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './localize/en'
import fr from './localize/fr'

const LOCALE_PERSISTENCE_KEY = 'language'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (language) => {
    const persistedLocale = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY)
    if (!persistedLocale) {
      return language('en')
    }
    return language(persistedLocale)
  },
  init: () => {},
  cacheUserLanguage: (locale) => {
    AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale)
  },
}

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
    },
  })

export default i18next
