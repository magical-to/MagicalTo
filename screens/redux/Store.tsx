import { MMKV } from 'react-native-mmkv';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { persistReducer as reduxPersistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

const storage = new MMKV();

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        isLogined: false,
    },
    reducers: {
        login: (state) => {
            state.isLogined = true;
        },
        logout: (state) => {
            state.isLogined = false;
        },
    },
});

const persistConfig = {
    key: 'root',
    storage: {
        getItem: (key) => {
            return Promise.resolve(storage.getBoolean(key));
        },
        setItem: (key, value) => {
            storage.set(key, value);
            return Promise.resolve();
        },
        removeItem: (key) => {
            storage.delete(key);
            return Promise.resolve();
        },
    },
};

const persistedReducer = reduxPersistReducer(persistConfig, AuthSlice.reducer);

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
});

export const { login, logout } = AuthSlice.actions;

export const persistor = persistStore(store);
