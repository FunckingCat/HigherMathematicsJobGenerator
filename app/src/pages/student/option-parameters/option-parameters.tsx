import { Button, Input } from 'antd';
import { type FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { studentActions } from 'store/student';
import styles from './option-parameters.module.scss';

export const OptionParameters: FC = () => {
  const [name, setUsername] = useState('');
  const [hash, setHash] = useState('');

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(studentActions.addInfo({
      hash,
      name
    }));
  };

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
        <Button type="primary" className={styles.button} onClick={handleClick}>Создать</Button>
      </div>
    </>
  );
};
