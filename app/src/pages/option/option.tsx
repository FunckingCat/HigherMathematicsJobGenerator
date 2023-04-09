import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { BlockMath } from 'react-katex';
import { useSelector } from 'react-redux';

import { Page } from 'widgets';
import {
  studentHashSelector,
  studentNameSelector, studentTasksSelector,
  studentUserHashSelector
} from 'store/student';
import { MathText } from 'shared/components';
import { type ITask } from 'config';

import { TASKS } from './constants';
import { parseTemplate } from './utils';
import styles from './option.module.scss';

export const Option: FC = () => {
  const name = useSelector(studentNameSelector);
  const hash = useSelector(studentHashSelector);
  const userHash = useSelector(studentUserHashSelector);
  const tasks = useSelector(studentTasksSelector);

  if (!name || !hash || !userHash || !tasks) {
    return (
      <Page className={styles.page}>
        Данные по формированию варианта отсутствуют. Перейдите
        <Link to="/" className={styles.link}> на главную страницу</Link>
      </Page>
    );
  }

  return (
    <Page className={styles.page}>
      <p>
        Пользователь:
        {' '}
        <strong>{name}</strong>
      </p>
      <p className={styles.header}>
        Код варианта:
        {' '}
        <strong>{hash}</strong>
      </p>
      <ol className={styles.list}>
        {tasks.map(({ id, amount }, index) => {
          const taskVariants = new Array<ITask>(amount).fill(
            TASKS.find(({ id: taskId }) => taskId === id)!
          );

          return taskVariants.map((task, taskIndex) => {
            const taskName = `№${taskIndex + 1} ${task.name}`;

            return (
            // eslint-disable-next-line
              <li key={`${id}${taskIndex}`} className={styles.listItem}>
                {task
                  ? (
                    <>
                      <MathText>{taskName}</MathText>
                      <BlockMath>
                        {parseTemplate(task.template, userHash, index * 10 + taskIndex)}
                      </BlockMath>
                    </>
                    )
                  : (
                    <p>
                      Задания с id =
                      {' '}
                      {id}
                      {' '}
                      не существует
                    </p>
                    )}
              </li>
            );
          });
        })}
      </ol>
    </Page>
  );
};
