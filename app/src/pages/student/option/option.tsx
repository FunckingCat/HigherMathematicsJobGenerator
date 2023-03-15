import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { BlockMath } from 'react-katex';
import { OPTION, TASKS } from './constants';
import { parseTask } from './helpers';

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
    <>
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
        {OPTION.tasks.map(({ id }) => {
          const task = TASKS.find(({ id: taskId }) => taskId === id);
          return (
            <li key={id}>
              {task
                ? (
                  <>
                    <p>{task.name}</p>
                    <p>{task.template}</p>
                    <BlockMath>{parseTask(task.template, OPTION.userHash)}</BlockMath>
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
        })}
      </ol>
    </>
  );
};
