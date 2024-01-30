import { configureStore } from '@reduxjs/toolkit'
import theme from '../features/darkTheme'

export default configureStore({
  reducer: {
    theme: theme
  },
})