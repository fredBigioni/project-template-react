import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isDisabled: false,
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {

        setIsLoadingData: (state, { payload }) => {
            state.isLoading = payload;
        },
        setDisabled: (state, { payload }) => {
            state.isDisabled = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    setIsLoadingData,
    setDisabled,
} = homeSlice.actions;