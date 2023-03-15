import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: false,
    message: ""
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        showMessage(state, action) {
            state.show = true;
            state.message = action.payload;
        },
        hideMessage(state) {
            state.show = false;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;