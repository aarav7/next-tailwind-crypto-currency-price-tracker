import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cryptos: []
};

const cryptoSlice = createSlice({
    name: "crypto",
    initialState,
    reducers: {
        replaceCryptos(state, action) {
            state.cryptos = action.payload;
        }
    }
});

export const cryptoActions = cryptoSlice.actions;

export default cryptoSlice;