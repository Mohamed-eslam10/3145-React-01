import { createSlice } from '@reduxjs/toolkit'


const settingsSlice = createSlice({
    name:'settingsSlice',
    initialState: {
        lang: 'en',
        theme: 'light',
    },
    reducers: {}
});


export default settingsSlice.reducer;