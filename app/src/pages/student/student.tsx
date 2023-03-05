import { Button } from 'antd';
import { type FC, useState } from 'react';
import { Page } from 'widgets';

import styles from './student.module.scss';

export const StudentPage: FC = () => {
  const [username, setUsername] = useState('')
  const [hash, setHash] = useState('')

  return <Page className={styles.wrapper}>
    <p>    
      Введите пожалуйста свою фамилию, имя и группу; код преподавателя
    </p>
    <div className={styles.sectionValue}>
      <input type='text' onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Иванов Иван 211-321'/>
      <input type='text' onChange={(e) => setHash(e.target.value)} value={hash} placeholder='************'/>
      <Button type="primary" className={styles.button} onClick={() => console.log('Button work')}>Создать</Button>
    </div>
  </Page>
}