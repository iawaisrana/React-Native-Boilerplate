import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { getThemeStyles } from 'theme'
import ThemeConnect from 'redux/store/theme/connect'
import { useSelector } from 'react-redux'

const AppButton = ({ onPress, title }) => {
  const darkMode = useSelector((state) => state.theme.darkMode)
  const styles = getThemeStyles(darkMode)

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ThemeConnect(AppButton)
