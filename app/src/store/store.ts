import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { REDUCER_NAMES } from './constants';
import { studentReducer } from './student';
import { taskReducer } from './task';
import { professorReducer } from './professor';

const rootReducer = combineReducers({
  [REDUCER_NAMES.STUDENT]: studentReducer,
  [REDUCER_NAMES.PROFESSOR]: professorReducer,
  [REDUCER_NAMES.TASK]: taskReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
