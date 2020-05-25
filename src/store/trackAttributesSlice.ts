import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum TrackAttributesOptions {
    Acousticness = 'target_acousticness',
    Danceability = 'target_danceability',
    Energy = 'target_energy',
    Instrumentalness = 'target_instrumentalness',
    Liveness = 'target_liveness',
    Loudness = 'target_loudness',
    Mode = 'target_mode',
    Popularity = 'target_popularity',
    Tempo = 'target_tempo',
    TimeSignature = 'target_time_signature',
    Valence = 'target_valence',
}

type TrackAttributeSettings = {
    active: boolean;
    value: number;
};

type TrackAttributes = Record<string, TrackAttributeSettings>;

const initialState: TrackAttributes = {
    target_acousticness: {
        active: false,
        value: 0.5,
    },
    target_danceability: {
        active: false,
        value: 0.5,
    },
    target_energy: {
        active: false,
        value: 0.5,
    },
    target_instrumentalness: {
        active: false,
        value: 0.5,
    },
    target_liveness: {
        active: false,
        value: 0.8,
    },
    target_loudness: {
        active: false,
        value: -30,
    },
    target_mode: {
        active: false,
        value: 1,
    },
    target_popularity: {
        active: false,
        value: 50,
    },
    target_tempo: {
        active: false,
        value: 80,
    },
    target_time_signature: {
        active: false,
        value: 4,
    },
    target_valence: {
        active: false,
        value: 0.5,
    },
};

const trackAttributesSlice = createSlice({
    name: 'trackAttributes',
    initialState,
    reducers: {
        setTrackAttribute: (
            state,
            action: PayloadAction<{
                attribute: TrackAttributesOptions;
                active?: boolean;
                value?: number;
            }>
        ) => {
            const { attribute, active, value } = action.payload;

            if (active !== undefined) state[attribute].active = active;
            if (value !== undefined) state[attribute].value = value;
        },
    },
});

export const { setTrackAttribute } = trackAttributesSlice.actions;

export default trackAttributesSlice.reducer;
