import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import settingsSlice from './settingsSlice'

export default configureStore({
    reducer: {
        userSlice,
        settingsSlice
    }
});