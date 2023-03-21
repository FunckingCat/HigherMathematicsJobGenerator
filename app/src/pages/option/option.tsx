import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { BlockMath } from 'react-katex';
import { TASKS } from 'config';
import { Page } from 'widgets';
import { OPTION } from './constants';
import { getRandomNumber, parseTask } from './helpers';
import styles from './option.module.scss';

export const Option: FC = () => {
  if (!OPTION) {
    return (
      <p>
        Данные по формированию варианта отсутствуют. Перейдите
        <Link to="/">на главную страницу</Link>
      </p>
    );
  }
  return (
    <Page className={styles.page}>
      <p>
        Пользователь:
        {' '}
        {OPTION.user}
      </p>
      <p>
        Код варианта:
        {' '}
        {OPTION.optionCode}
      </p>
      <ol>
        {OPTION.tasks.map(({ id, amount }) => {
          const taskVariants = new Array(amount).fill(
            TASKS.find(({ id: taskId }) => taskId === id)
          );
          return taskVariants.map((task, taskIndex) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${id}${taskIndex}`}>
              {task
                ? (
                  <>
                    <p>
                      {task.name}
                      . Пример
                      {' '}
                      {taskIndex + 1}
                    </p>
                    <p>{task.template}</p>
                    <BlockMath>{parseTask(task.template, getRandomNumber)}</BlockMath>
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
          ));
        })}
      </ol>
    </Page>
  );
};
