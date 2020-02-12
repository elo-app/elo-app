import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { reducer as exampleReducer } from '@store/exampleSlice';

const reducer = {
  example: exampleReducer,
};

const sageMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sageMiddleware];

const store = configureStore({
  reducer,
  middleware,
});

export default store;
