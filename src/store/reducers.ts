import { combineReducers } from 'redux';
import appReducer from './appSlice';
import artistsReducer from './artistsSlice';
import playlistReducer from './playlistSlice';
import trackAttributesReducer from './trackAttributesSlice';

const rootReducer = combineReducers({
    app: appReducer,
    artists: artistsReducer,
    playlist: playlistReducer,
    trackAttributes: trackAttributesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
