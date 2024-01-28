import { configureStore } from '@reduxjs/toolkit'
import site from './redux/site'

export default configureStore({
  reducer: {
    site: site
  },
})