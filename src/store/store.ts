import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import LogRocket from 'logrocket';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [
        ...getDefaultMiddleware({
            // Fix for 'A non-serializable value was detected in an action':
            // https://github.com/rt2zz/redux-persist/issues/988
            serializableCheck: false,
        }),
        LogRocket.reduxMiddleware({
            actionSanitizer: function (action) {
                if (action.type.includes('app/')) {
                    return null;
                }
                return action;
            },
        }),
    ],
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export { store, persistor };
