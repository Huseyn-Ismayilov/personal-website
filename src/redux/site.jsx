import { createSlice } from '@reduxjs/toolkit'

export const darkMode = createSlice({
  name: 'darkMode',
  initialState: {
    dark: false
  },
  reducers: {
    setDarkMode: state => {
      state.dark = !dark
    }
  },
})

export const { setDarkMode } = darkMode.actions

export default darkMode.reducer