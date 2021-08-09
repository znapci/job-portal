import { configureStore } from '@reduxjs/toolkit'
import postsAreaReducer from './reducers/postsAreaSlice'
import loginScreenReducer from './reducers/loginScreenSlice'

export const store = configureStore({
  reducer: {
    postsArea: postsAreaReducer,
    loginScreen: loginScreenReducer

  }
})
