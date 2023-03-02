import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: null,
    userData: null,
    isLoading: false,
    isDisabled: false,
    isModalOpening: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadUsersData: (state, { payload }) => {
            state.userData = payload.map((d) => {
                return d;
            });
        },
        changeStateModal: (state, { payload }) => {
            state.isModalOpening = payload;
        },
        changeIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    loadUsersData,
    changeStateModal,
    changeIsLoading,
} = userSlice.actions;