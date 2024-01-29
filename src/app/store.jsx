import { configureStore } from '@reduxjs/toolkit'
import theme0  from '../features/themeTest'

export default configureStore({
  reducer: {
    theme: theme0
  },
})