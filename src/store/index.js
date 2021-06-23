import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(ReduxThunk)
    : applyMiddleware(logger, ReduxThunk);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
