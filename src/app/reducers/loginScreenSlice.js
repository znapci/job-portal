import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { client } from '../../api/client'
const initialState = {
  value: {
    token: '',
    loginStatus: ''
  },
  status: ''
}

export const requestLogin = createAsyncThunk(
  'loginScreen/requestLogin',
  ({ url, email, password, remember }) => client.post(url, {
    email: email,
    password: password,
    remember: remember
  })
)
const loginScreenSlice = createSlice({
  name: 'loginScreen',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestLogin.pending, (state) => {
      state.status = 'loading'
    }).addCase(requestLogin.fulfilled, (state, action) => {
      state.status = 'success'
      state.value = action.payload
    }).addCase(requestLogin.rejected, (state, action) => {
      state.value = action
      state.status = 'rejected'
    })
  },
  default: state => state
})

export default loginScreenSlice.reducer
