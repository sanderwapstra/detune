import { createSlice } from '@reduxjs/toolkit';

type SliceState = {
    name: string;
};

const playlistSlice = createSlice({
    name: 'playlist',
    initialState: {
        name: '',
    } as SliceState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const { setName } = playlistSlice.actions;

export default playlistSlice.reducer;
