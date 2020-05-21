import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
    token: string | null;
    user: SpotifyApi.UserObjectPublic | null;
    artists: SpotifyApi.ArtistObjectFull[];
};

const appSlice = createSlice({
    name: 'app',
    initialState: {
        token: null,
        user: null,
        artists: [],
    } as SliceState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        addArtist: (state, action) => {
            console.log('action.payload', action.payload);
            state.artists.push(action.payload);
        },
        removeArtist(state, action) {
            state.artists.splice(
                state.artists.findIndex(artist => artist.id === action.payload),
                1
            );
        },
    },
});

export const { setToken, setUser, addArtist, removeArtist } = appSlice.actions;

export default appSlice.reducer;
