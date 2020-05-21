import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
    token: string | null;
    user: SpotifyApi.UserObjectPublic | null;
    genres: string[] | null;
    artists: SpotifyApi.ArtistObjectFull[];
};

const appSlice = createSlice({
    name: 'app',
    initialState: {
        token: null,
        user: null,
        genres: null,
        artists: [],
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
        addArtist: (state, action) => {
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

export const {
    setToken,
    setUser,
    setGenres,
    addArtist,
    removeArtist,
} = appSlice.actions;

export default appSlice.reducer;
