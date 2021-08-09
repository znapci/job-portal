import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState = {
    value:
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
    status: 'idle'
}
//todo handle error codes
export const fetchPostsData = createAsyncThunk(
    'posts/fetchData',
    url => fetch(url, {
        method: 'GET',

    })
        .then(res =>
            res.json()
                .then(jsonRes => jsonRes)
        ).catch((err) => {
            console.error(err);
            alert('Sorry something went wrong, try reloading the page :|\n');
        })
)
export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers:
        (builder) => {
            builder
                .addCase(fetchPostsData.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(fetchPostsData.fulfilled, (state, action) => {
                    state.status = 'idle'
                    state.value = action.payload
                })
        }
})

export default postsSlice.reducer