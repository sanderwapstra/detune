import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
    token: string | null;
    user: SpotifyApi.CurrentUsersProfileResponse | null;
    genres: string[] | null;
};

const appSlice = createSlice({
    name: 'app',
    initialState: {
        token: null,
        user: null,
        genres: null,
    } as SliceState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

export const { setToken, setUser, setGenres } = appSlice.actions;

export default appSlice.reducer;
