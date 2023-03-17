import { Button, Input } from 'antd';
import { type FC, useState, type MouseEvent } from 'react';
import { Page } from 'widgets';
import { useDispatch } from 'react-redux';
import { studentActions } from 'store/student/slice';

import styles from './student.module.scss';

export const StudentPageWithCode: FC = () => {
  const [name, setUsername] = useState('');
  const [hash, setHash] = useState('');

  const dispatch = useDispatch();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    dispatch(studentActions.addInfo({
      hash,
      name
    }));
  };

  return (
    <Page className={styles.wrapper}>
      <p>
        Введите пожалуйста свою фамилию, имя и группу; код преподавателя
      </p>
      <div className={styles.sectionValue}>
        <Input
          type="text"
          onChange={(e) => { setUsername(e.target.value); }}
          value={name}
          placeholder="Иванов Иван 211-321"
        />
        <Button type="primary" onClick={handleClick}>Создать</Button>
      </div>
    </Page>
  );
};
