import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type NonNullableFields } from 'share';

import { REDUCER_NAMES } from '../constants';
import { type IProfessorState, IProfessorSection, IProfessorValues } from './types';

const initialState: IProfessorState = {
  section: null,
  values: []
};

export const { actions: professorActions, reducer: professorReducer } = createSlice({
  name: REDUCER_NAMES.STUDENT,
  initialState,
  reducers: {
    setSection: (state, { payload }: PayloadAction<NonNullableFields<IProfessorSection>>) => ({
      ...state,
      section: payload.section
    }),
    setValues: (state, { payload }: PayloadAction<NonNullableFields<IProfessorValues>>) => ({
      ...state,
      values: payload.values
    }),
  }
});
