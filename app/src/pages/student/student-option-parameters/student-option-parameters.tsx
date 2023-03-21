import { Button, Input, message } from 'antd';
import { type FC, useState, type MouseEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { studentActions } from 'store/student/slice';
import { SHA512 } from 'crypto-js';
import { type ISelectedTask } from '../../../store/task/types';

import styles from './student-option-parameters.module.scss';

export const StudentOptionParameters: FC = () => {
  const [name, setUsername] = useState('');
  const [hash, setHash] = useState('');

  const dispatch = useDispatch();
  const { option } = useParams<{ option: string }>();

  useEffect(() => {
    if (option) {
      setHash(option);
    }
  }, [option]);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const decodeTasks = (encodedTasks: string): ISelectedTask[] => {
      try {
        const decodedString = atob(encodedTasks);
        const tasks: ISelectedTask[] = decodedString.split('|').map((part) => {
          const [id, amount] = part.split('N');
          if (id == null) {
            void message.error('Неверный код варианта!');
            throw new Error('Неверный код варианта!');
          }
          return {
            id: Number(id),
            amount: Number(amount)
          };
        });

        return tasks;
      } catch (error) {
        void message.error('Неверный код варианта!');
        throw new Error('Неверный код варианта!');
      }
    };
    const hashedName = SHA512(name).toString();
    dispatch(studentActions.addInfo({
      hash,
      name,
      userHash: hashedName,
      tasks: decodeTasks(hash)
    }));
  };

  const isButtonDisabled = !name;
  return (
    <>
      <p>
        Введите пожалуйста свою фамилию, имя и группу
      </p>
      <div className={styles.sectionValue}>
        <Input
          type="text"
          onChange={(e) => { setUsername(e.target.value); }}
          value={name}
          placeholder="Иванов Иван 211-321"
        />
        <Button type="primary" onClick={handleClick} disabled={isButtonDisabled}>Создать</Button>
      </div>
    </>
  );
};
