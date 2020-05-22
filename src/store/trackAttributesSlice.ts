import { createSlice } from '@reduxjs/toolkit';

type TrackAttribute = {
    active: boolean;
    value: number;
};

type SliceState = {
    acousticness: TrackAttribute;
    danceability: TrackAttribute;
    energy: TrackAttribute;
    instrumentalness: TrackAttribute;
    liveness: TrackAttribute;
    loudness: TrackAttribute;
    mode: TrackAttribute;
    popularity: TrackAttribute;
    tempo: TrackAttribute;
    time_signature: TrackAttribute;
    valence: TrackAttribute;
};

const trackAttributesSlice = createSlice({
    name: 'trackAttributes',
    initialState: {
        acousticness: {
            active: false,
            value: 0.5,
        },
        danceability: {
            active: false,
            value: 0.5,
        },
        energy: {
            active: false,
            value: 0.5,
        },
        instrumentalness: {
            active: false,
            value: 0.5,
        },
        liveness: {
            active: false,
            value: 0.8,
        },
        loudness: {
            active: false,
            value: -30,
        },
        mode: {
            active: false,
            value: 0,
        },
        popularity: {
            active: false,
            value: 50,
        },
        tempo: {
            active: false,
            value: 80,
        },
        time_signature: {
            active: false,
            value: 4,
        },
        valence: {
            active: false,
            value: 0.5,
        },
    } as SliceState,
    reducers: {
        setAcousticness: (state, action) => {
            state.acousticness = action.payload;
        },
        setDanceability: (state, action) => {
            state.danceability = action.payload;
        },
        setEnergy: (state, action) => {
            state.energy = action.payload;
        },
        setInstrumentalness: (state, action) => {
            state.instrumentalness = action.payload;
        },
        setLiveness: (state, action) => {
            state.liveness = action.payload;
        },
        setLoudness: (state, action) => {
            state.loudness = action.payload;
        },
        setMode: (state, action) => {
            state.mode = action.payload;
        },
        setPopularity: (state, action) => {
            state.popularity = action.payload;
        },
        setTempo: (state, action) => {
            state.tempo = action.payload;
        },
        setTimeSignature: (state, action) => {
            state.time_signature = action.payload;
        },
        setValence: (state, action) => {
            state.valence = action.payload;
        },
    },
});

export const { setAcousticness } = trackAttributesSlice.actions;

export default trackAttributesSlice.reducer;
