import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux'

import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'

import { persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/lib/persistStore'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './root-reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
].filter(Boolean)

const composedEnchancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = composedEnchancer(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
