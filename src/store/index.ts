import {
  configureStore,
  getDefaultMiddleware,
  combineReducers
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from '@store/slices/auth';

const reducer = {
  auth: authReducer
};

const appReducer = combineReducers(reducer);

export type AppState = ReturnType<typeof appReducer>;

const sageMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sageMiddleware];

const store = configureStore({
  reducer,
  middleware
});

export default store;
