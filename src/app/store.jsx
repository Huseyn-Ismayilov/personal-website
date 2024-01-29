import { configureStore } from '@reduxjs/toolkit'
import theme from '../features/themeTest'

export default configureStore({
  reducer: {
    theme: theme
  },
})