import { type FC, useEffect, useRef, useState } from 'react';

import { Page } from 'widgets';
import { TASKS_CONFIGURATION } from 'config';

import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

import { type ITaskProps } from './types';
import styles from './professor.module.scss';

export const ProfessorPage: FC = () => (
  <Page className={styles.wrapper}>
    {PROFESSOR_CONFIG.task_sections.map((section) => (
      <div key={section.id} className={styles.section}>
        <p className={styles.sectionName}>
          №
          {section.id}
          {' '}
          {section.name}
        </p>
        <div className={styles.sectionValues}>
          <div className={styles.formulas}>
            {section.formulas.map((formula) => (
              <BlockMath key={formula.id}>{formula.formula}</BlockMath>
            ))}
          </div>
          <div className={styles.tasks}>
            {section.tasks.map((task) => <Task key={task.id} task={task} />)}
          </div>
        </div>
        <hr />
      </div>
    ))}
  </Page>
);

const Task: FC<ITaskProps> = ({ task }) => {
  const [disabled, setDisabled] = useState(true);
  const countRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    setDisabled((prev) => !prev);
  };

  useEffect(() => {
    if (!disabled) {
      countRef.current?.focus();
    }
  }, [disabled]);

  return (
    <div className={styles.taskContainer}>
      <BlockMath>{task.task}</BlockMath>
      <label htmlFor={task.task} className={styles.difficult}>
        <input id={task.task} type="checkbox" onChange={handleChange} />
        <p>{task.difficult}</p>
      </label>
      <input type="number" disabled={disabled} ref={countRef} />
    </div>
  );
};
