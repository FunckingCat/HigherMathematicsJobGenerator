import { type FC } from 'react';

import { Page } from 'widgets';
import { PROFESSOR_CONFIG } from 'config';

import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

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
            {section.tasks.map((task) => (
              <div key={task.id} className={styles.taskContainer}>
                <BlockMath>{task.task}</BlockMath>
                <label htmlFor="active" className={styles.difficult}>
                  <input id="active" type="checkbox" />
                  <p>{task.difficult}</p>
                </label>
                <input type="number" />
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>
    ))}
  </Page>
);
