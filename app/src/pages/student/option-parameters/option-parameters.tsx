import { Button, Input, message } from 'antd';
import { type FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { studentActions } from 'store/student';
import { SHA512 } from 'crypto-js';
import { type ISelectedTask } from '../../../store/task/types';

import styles from './option-parameters.module.scss';

export const OptionParameters: FC = () => {
  const [name, setUsername] = useState('');
  const [hash, setHash] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    const hashedName = SHA512(name).toString();
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
    dispatch(studentActions.addInfo({
      hash,
      name,
      userHash: hashedName,
      tasks: decodeTasks(hash)
    }));
  };
  const isButtonDisabled = !name || !hash;

  return (
    <>
      <p>
        Введите пожалуйста свою фамилию, имя и группу; код преподавателя
      </p>
      <div className={styles.sectionValue}>
        <Input
          className={styles.inputOption}
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={name}
          placeholder="Иванов Иван 211-321"
        />
        <Input
          className={styles.inputOption}
          type="text"
          onChange={(e) => {
            setHash(e.target.value);
          }}
          value={hash}
          placeholder="************"
        />
        <Button
          type="primary"
          className={styles.button}
          onClick={handleClick}
          disabled={isButtonDisabled}
        >
          Создать
        </Button>
      </div>
    </>
  );
};
