import { darkStyles } from './darkTheme'
import { lightStyles } from './lightTheme'

export const getThemeStyles = (darkMode) => {
  return !darkMode ? lightStyles : darkStyles
}
