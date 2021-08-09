import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    token: 'placeholder',
    status: undefined
  },
  status: 'idle'
}
