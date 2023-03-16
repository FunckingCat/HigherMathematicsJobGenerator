import { type PROFESSOR_CONFIG } from 'config';

export interface ITaskProps {
  task: typeof PROFESSOR_CONFIG.task_sections[0]['tasks'][0]
}
