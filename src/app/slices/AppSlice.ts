import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/types/app/Types.types";

const initialState: AppTypeInitialState = {
    toasts: [],
    userInfo: undefined
};

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setToast: (state, action) => {
            // extract a copy of the toast array at the local state
            const toasts = [...state.toasts];
            // add to the new array our payload
            toasts.push(action.payload);
            // assign to the actual state 
            state.toasts = toasts;
        },
        clearToasts: (state, action) => {
            state.toasts = [];
        },
        setUserStatus: 
    },
});

export const { setToast, clearToasts } = AppSlice.actions;
