import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type NonNullableFields } from 'shared';

import { REDUCER_NAMES } from '../constants';
import { type IProfessorState, type IProfessorSection, type IProfessorValues } from './types';

const initialState: IProfessorState = {
  section: null,
  values: []
};

export const { actions: professorActions, reducer: professorReducer } = createSlice({
  name: REDUCER_NAMES.PROFESSOR,
  initialState,
  reducers: {
    setSection: (state, { payload }: PayloadAction<NonNullableFields<IProfessorSection>>) => ({
      ...state,
      section: payload.section
    }),
    setValues: (state, { payload }: PayloadAction<NonNullableFields<IProfessorValues>>) => ({
      ...state,
      values: payload.values
    })
  }
});
