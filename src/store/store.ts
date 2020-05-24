import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware({
            // Fix for 'A non-serializable value was detected in an action':
            // https://github.com/rt2zz/redux-persist/issues/988
            serializableCheck: false,
        }),
    ],
});

export type AppDispatch = typeof store.dispatch;

export { store };
