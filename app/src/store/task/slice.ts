import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { REDUCER_NAMES } from '../constants';
import { type ISelectedTask, type ITaskState } from './types';

const initialState: ITaskState = {
  selectedTasks: []
};

export const { actions: taskActions, reducer: taskReducer } = createSlice({
  name: REDUCER_NAMES.TASK,
  initialState,
  reducers: {
    addSelectedTask: (state, { payload }: PayloadAction<ISelectedTask>) => {
      state.selectedTasks.push(payload);
    }
  }
});
