import { createSlice } from '@reduxjs/toolkit'

const initialSliceState = {
  colourBlindMode: false,
}

export const heardleSlice = createSlice({
  name: 'heardle',
  initialState: initialSliceState,
  reducers: {
    setColourBlindMode: (sliceState, colorBlindMode) => {
      sliceState.colorBlindMode = colorBlindMode
    },
  },
})

export const { setColourBlindMode } = heardleSlice.actions

export default heardleSlice.reducer
