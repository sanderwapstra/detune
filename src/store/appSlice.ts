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
        resetUser: state => {
            state.token = null;
            state.user = null;
        },
    },
});

export const { setToken, setUser, resetUser } = appSlice.actions;

export default appSlice.reducer;
