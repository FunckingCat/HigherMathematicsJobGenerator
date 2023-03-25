import { type FC } from 'react';
import { Button, QRCode, Typography } from 'antd';

import { Error, Page } from 'widgets';
import { PATHS } from 'config';
import { generateHash } from 'store/utils';
import { getOriginPath } from 'shared/utils';

import { useNavigate } from 'react-router-dom';
import styles from './qr.module.scss';

export const QRPage: FC = () => {
  const hash = generateHash();
  const navigate = useNavigate();

  const renderQR = () => {
    if (!hash) {
      return null;
    }

    const originPath = getOriginPath();
    const studentPath = `${originPath}${PATHS.STUDENT}/${hash}`;
    const tasksPath = `${originPath}${PATHS.TASKS}`;

    return (
      <div className={styles.qr}>
        <Typography.Title>Отсканируй QR код или перейди по ссылке</Typography.Title>
        <QRCode value={studentPath} />
        <Button href={studentPath}>
          {studentPath}
        </Button>
        <div className={styles.pathButtons}>
          <Button onClick={() => { navigate(-1); }}>
            Назад
          </Button>
          <Button href={tasksPath}>
            Вернуться к секциям
          </Button>
        </div>
      </div>
    );
  };

  const renderError = () => {
    if (hash) {
      return null;
    }

    return (
      <Error
        message="Кажется, что вы не выбрали ни одного примера"
        redirect={PATHS.PROFESSOR}
      />
    );
  };

  return (
    <Page className={styles.wrapper}>
      {renderQR()}
      {renderError()}
    </Page>
  );
};
