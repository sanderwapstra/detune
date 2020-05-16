import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
    token: string | null;
};

const appSlice = createSlice({
    name: 'app',
    initialState: {
        token: null,
    } as SliceState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { setToken } = appSlice.actions;

export default appSlice.reducer;
