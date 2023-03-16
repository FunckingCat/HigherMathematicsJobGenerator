import { type AppStateType } from '../types';

export const selectedTasksSelector = (state: AppStateType) => state.task.selectedTasks;
