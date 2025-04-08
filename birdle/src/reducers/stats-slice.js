import { createSlice } from '@reduxjs/toolkit'

const initialSliceState = {
  played: 0,
  success: 0,
  hints: 0,
  edges: 0,
  guesses: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  },
}

export const statsSlice = createSlice({
  name: 'stats',
  initialState: initialSliceState,
  reducers: {
    setColourBlindMode: (sliceState, { payload }) => {
      const { colorBlindMode } = payload
      sliceState.colorBlindMode = colorBlindMode
    },
  },
})

export const { setColourBlindMode } = statsSlice.actions

export default statsSlice.reducer
