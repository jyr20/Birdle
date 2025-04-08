import { configureStore } from '@reduxjs/toolkit'

import birdleSlice from './birdle-slice'
import heardleSlice from './heardle-slice'

export const store = configureStore({
  reducer: {
    birdle: birdleSlice,
    heardle: heardleSlice,
  },
})
