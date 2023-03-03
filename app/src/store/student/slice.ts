import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type NonNullableFields } from 'share';

import { REDUCER_NAMES } from '../constants';
import { type IStudentState } from './types';

const initialState: IStudentState = {
  hash: null,
  name: null,
  group: null
};

export const { actions: studentActions, reducer: studentReducer } = createSlice({
  name: REDUCER_NAMES.STUDENT,
  initialState,
  reducers: {
    addInfo: (state, { payload }: PayloadAction<NonNullableFields<IStudentState>>) => {
      state = payload;
    }
  }
});
