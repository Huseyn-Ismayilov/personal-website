import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'test',
    initialState: {
        isDark: false
    },
    reducers: {
        setDarkMode: (state) => {
            state.isDark = !state.isDark
        }
    },
})

export const { setDarkMode } = themeSlice.actions

export default themeSlice.reducer 