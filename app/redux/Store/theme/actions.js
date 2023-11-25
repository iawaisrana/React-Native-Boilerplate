import { createAction } from '@reduxjs/toolkit'

export const TOGGLE_THEME = 'TOGGLE_THEME'

export const ThemeActions = {
  toggleTheme: createAction(TOGGLE_THEME),
}
