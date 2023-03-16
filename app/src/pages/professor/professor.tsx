import { type FC } from 'react';

import { Page } from 'widgets';
import { TASKS_CONFIGURATION } from 'config';

import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

import styles from './professor.module.scss';

export const ProfessorPage: FC = () => (
  <Page className={styles.wrapper}>
    {TASKS_CONFIGURATION.map(({section, section_name, templates}, index) => 
      <div key={index} className={styles.section}>
        <p className={styles.sectionName}>{section_name}</p>
        <div className={styles.sectionValues}>
          <div className={styles.formulas}>
            {templates.map(template =>
              <div key={template.id}>
                <BlockMath>{template.view}</BlockMath>
                <BlockMath>{template.template}</BlockMath>
              </div>
            )}
          </div>
          {/* <div className={styles.tasks}>
            {section.tasks.map(task => 
              <div key={task.id} className={styles.taskContainer}>
                <BlockMath>{task.task}</BlockMath>
                <label htmlFor="active" className={styles.difficult}>
                  <input id="active" type="checkbox" />
                  <p>{task.difficult}</p>
                </label>
                <input type="number" />
              </div>
            )}
          </div> */}
        </div>
        <hr></hr>
      </div>
    )}
  </Page>
);
