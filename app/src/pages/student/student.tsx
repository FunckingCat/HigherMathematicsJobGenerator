import { Button } from 'antd';
import { type FC, useState } from 'react';
import { Page } from 'widgets';
import { useDispatch, useSelector } from 'react-redux';
import { studentNameSelector, studentHashSelector } from '../../store/student/';
import { studentActions } from '../../store/student/slice';


import styles from './student.module.scss';




export const StudentPage: FC = () => {
  const [name, setUsername] = useState('')
  const [hash, setHash] = useState('')

  const dispatch = useDispatch();
  const name = useSelector(studentNameSelector);
  const hash = useSelector(studentHashSelector);

  const handleNameChange = (e: { target: { value: any; }; }) => {
    dispatch(studentActions.addInfo({name: e.target.value}));
  };

  const handleHashChange = (e: { target: { value: any; }; }) => {
    dispatch(studentActions.addInfo({hash: e.target.value}));
  };

  return <Page className={styles.wrapper}>
    <p>    
      Введите пожалуйста свою фамилию, имя и группу; код преподавателя
    </p>
    <div className={styles.sectionValue}>
      {/* <input type='text' onChange={(e) => setUsername(e.target.value)} value={name} placeholder='Иванов Иван 211-321'/>
      <input type='text' onChange={(e) => setHash(e.target.value)} value={hash} placeholder='************'/> */}
      <input type='text' onChange={handleNameChange} value={name as string} placeholder='Иванов Иван 211-321'/>
      <input type='text' onChange={handleHashChange} value={hash as string} placeholder='************'/>
      <Button type="primary" className={styles.button} onClick={() => console.log('Button work')}>Создать</Button>
    </div>
  </Page>
};



