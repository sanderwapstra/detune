import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
    acousticness: number | undefined;
    danceability: number | undefined;
    energy: number | undefined;
    instrumentalness: number | undefined;
    key: number | undefined;
    liveness: number | undefined;
    loudness: number | undefined;
    mode: number | undefined;
    popularity: number | undefined;
    speechiness: number | undefined;
    tempo: number | undefined;
    time_signature: number | undefined;
    valence: number | undefined;
};

const trackSlice = createSlice({
    name: 'track',
    initialState: {
        acousticness: undefined,
        danceability: undefined,
        energy: undefined,
        instrumentalness: undefined,
        key: undefined,
        liveness: undefined,
        loudness: undefined,
        mode: undefined,
        popularity: undefined,
        speechiness: undefined,
        tempo: undefined,
        time_signature: undefined,
        valence: undefined,
    } as SliceState,
    reducers: {
        setAcousticness: (state, action) => {
            state.acousticness = action.payload;
        },
    },
});

export const { setAcousticness } = trackSlice.actions;

export default trackSlice.reducer;
