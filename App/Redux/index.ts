// @ts-nocheck
import {createStore, combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import R, * as _ from 'ramda'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension'

import createSagaMiddleware from 'redux-saga'

import rootSaga from '../Sagas'

/* ------------- Assemble The Reducers ------------- */
export const appReducer = combineReducers({
  amount: require('./AmountRedux').reducer,
  user: require('./UserRedux').reducer,
})

export const rootReducer = (state: any, action: any) => {
  if (action.type === 'SIGN_OUT_SUCCESS') {
    state = {
      app: state.app
    }
  }
  return appReducer(state, action)
}

let store: AppReduxStore

export const getStore = (): { store: AppReduxStore } => ({
  store
})

const initStore = () => {
  const middleware = []
  // Add Redux Logger
  const USE_LOGGING = __DEV__
  const loggingBlacklist = [
    'EFFECT_TRIGGERED',
    'EFFECT_RESOLVED',
    'EFFECT_REJECTED',
    'persist/REHYDRATE'
  ]
  const reduxLogger = createLogger({
    predicate: (getState, { type }) =>
      USE_LOGGING && R.not(R.includes(type, loggingBlacklist)),
    duration: true,
    colors: {
      title: () => 'red',
      prevState: () => 'green',
      action: () => 'blue',
      nextState: () => 'orange'
    }
  })

  // Comment this line to hide Redux Logger
  middleware.push(reduxLogger)

  // Add Saga Middleware
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  const middleWareEnhancer = applyMiddleware(...middleware)

  // Create Store
  store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer))

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}

export default initStore()
