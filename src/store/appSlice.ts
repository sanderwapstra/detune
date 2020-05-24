import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
    token: string | null;
    user: SpotifyApi.UserObjectPublic | null;
};

const appSlice = createSlice({
    name: 'app',
    initialState: {
        token: null,
        user: null,
    } as SliceState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setToken, setUser } = appSlice.actions;

export default appSlice.reducer;