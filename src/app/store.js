import { configureStore } from '@reduxjs/toolkit'
import postsAreaReducer from './reducers/postsAreaSlice'

export const store = configureStore({
  reducer: {
    posts: postsAreaReducer
  }
})
