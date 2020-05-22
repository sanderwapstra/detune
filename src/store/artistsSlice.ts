import { createSlice } from '@reduxjs/toolkit';

type SliceState = SpotifyApi.ArtistObjectFull[];

const artistsSlice = createSlice({
    name: 'artists',
    initialState: [] as SliceState,
    reducers: {
        addArtist: (state, action) => {
            state.push(action.payload);
        },
        removeArtist(state, action) {
            state.splice(
                state.findIndex(artist => artist.id === action.payload),
                1
            );
        },
    },
});

export const { addArtist, removeArtist } = artistsSlice.actions;

export default artistsSlice.reducer;
