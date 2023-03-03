import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { REDUCER_NAMES } from './constants';
import { studentReducer } from './student';

const rootReducer = combineReducers({
  [REDUCER_NAMES.STUDENT]: studentReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
