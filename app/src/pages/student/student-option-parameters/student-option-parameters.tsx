import { Button, Input } from 'antd';
import { type FC, useState, type MouseEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { studentActions } from 'store/student/slice';

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
    dispatch(studentActions.addInfo({
      hash,
      name
    }));
  };
  const isButtonDisabled = !name;
  return (
    <>
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
        <Button type="primary" onClick={handleClick} disabled={isButtonDisabled}>Создать</Button>
      </div>
    </>
  );
};
