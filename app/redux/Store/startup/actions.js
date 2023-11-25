import { createAction } from '@reduxjs/toolkit'

export const STARTUP = 'STARTUP'

export const StartupActions = {
  startup: createAction(STARTUP),
}
