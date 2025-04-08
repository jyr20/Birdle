import { createSlice } from '@reduxjs/toolkit'
import { NUM_ROWS } from '../constants/general'

const initialSliceState = {
  endGame: false,
  notQuite: false,
  isWinner: false,
  isGameOver: false,
  wordGrid: [],
  correctLetters: [],
  currentFocussedRow: 0,
  hintShow: false,
  modalOpen: false,
  usedHint: false,
  colourBlindMode: false,
  returner: false,
  hint: null,
}

export const birdleSlice = createSlice({
  name: 'birdle',
  initialState: initialSliceState,
  reducers: {
    initializeWordGrid: (sliceState) => {
      let newWordGrid = []
      for (let i = 0; i < NUM_ROWS; i++) {
        newWordGrid.push({ content: '', tags: [false] })
        // tags will be an array of booleans - is letter in answer
      }
      sliceState.wordGrid = newWordGrid
    },
    setColourBlindMode: (sliceState, colorBlindMode) => {
      sliceState.colorBlindMode = colorBlindMode
    },
    setHintShow: (sliceState, colorBlindMode) => {
      sliceState.colorBlindMode = colorBlindMode
    },
  },
})

export const { setColourBlindMode } = birdleSlice.actions

export default birdleSlice.reducer
