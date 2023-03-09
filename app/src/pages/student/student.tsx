import { Button } from 'antd';
import { type FC, useState, MouseEvent } from 'react';
import { Page } from 'widgets';
import { useDispatch } from 'react-redux';
import { studentActions } from '../../store/student/slice';

import styles from './student.module.scss';

export const StudentPage: FC = () => {
  const [name, setUsername] = useState('')
  const [hash, setHash] = useState('')

  const dispatch = useDispatch();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    dispatch(studentActions.addInfo({name, hash}));
  };

  return <Page className={styles.wrapper}>
    <p>    
      Введите пожалуйста свою фамилию, имя и группу; код преподавателя
    </p>
    <div className={styles.sectionValue}>
      <input type='text' onChange={(e) => setUsername(e.target.value)} value={name} placeholder='Иванов Иван 211-321'/>
      <input type='text' onChange={(e) => setHash(e.target.value)} value={hash} placeholder='************'/>
      <Button type="primary" className={styles.button} onClick={handleClick}>Создать</Button>
    </div>
  </Page>
};



