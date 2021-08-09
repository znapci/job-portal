import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: {
    postsData:
            Array(15).fill({
              id: null,
              title: null,
              company: null,
              imgUrl: null,
              companyUrl: null,
              applyByDate: null,
              joinByDate: null,
              place: null,
              salary: null,
              tags: null,
              modalContent: null
            }),
    pageData: {
      totalPages: null
    }
  },
  status: 'idle'
}
// todo handle error codes
export const fetchData = createAsyncThunk(
  'postsArea/fetchData',
  url => fetch(url, {
    method: 'GET'

  })
    .then(res =>
      res.json()
        .then(jsonRes => jsonRes)
    ).catch((err) => {
      console.error(err)
      alert('Sorry something went wrong, try reloading the page :|\n')
    })
)
export const PostsAreaSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers:
        (builder) => {
          builder
            .addCase(fetchData.pending, (state) => {
              state.status = 'loading'
            })
            .addCase(fetchData.fulfilled, (state, action) => {
              state.status = 'idle'
              state.value = action.payload
            })
        },
  default: state => state
})

export default PostsAreaSlice.reducer