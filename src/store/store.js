import { configureStore } from '@reduxjs/toolkit';
import { authSlice, taskSlice, generalSlice, userSlice, homeSlice } from './slices';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'store',
    storage,
    whitelist: ['auth', 'home', 'task', 'general', 'user'],
};
const reducers = combineReducers({
    auth: authSlice.reducer,
    home: homeSlice.reducer,
    task: taskSlice.reducer,
    general: generalSlice.reducer,
    user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});