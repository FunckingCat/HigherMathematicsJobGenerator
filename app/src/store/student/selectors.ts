import { type AppStateType } from '../index';

export const studentNameSelector = (state: AppStateType) => state.student.name;

export const studentHashSelector = (state: AppStateType) => state.student.hash;
