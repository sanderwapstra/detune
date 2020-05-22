import { combineReducers } from 'redux';
import appReducer from './appSlice';
import artistsReducer from './artistsSlice';
import trackAttributesReducer from './trackAttributesSlice';

const rootReducer = combineReducers({
    app: appReducer,
    artists: artistsReducer,
    trackAttributes: trackAttributesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
