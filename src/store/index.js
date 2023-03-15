import { configureStore } from "@reduxjs/toolkit";
import cryptoSlice from './crypto-slice';
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: { crypto: cryptoSlice.reducer, ui: uiSlice.reducer }
});

export default store;