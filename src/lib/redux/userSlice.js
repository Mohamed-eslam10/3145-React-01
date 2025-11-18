import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        firstName: '',
        lastName: '',
        image: '',
        gender: '',
    },
    reducers: {}
});

export default userSlice.reducer;