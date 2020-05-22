import { combineReducers } from 'redux';
import appReducer from './appSlice';
import artistsReducer from './artistsSlice';
import trackReducer from './trackSlice';

const rootReducer = combineReducers({
    app: appReducer,
    artists: artistsReducer,
    track: trackReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
