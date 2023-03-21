import { type FC } from 'react';
import { Button, QRCode, Typography } from 'antd';

import { Error, Page } from 'widgets';
import { PATHS } from 'config';
import { generateHash } from 'store/utils';
import { getOriginPath } from 'shared/utils';

import styles from './qr.module.scss';

export const QRPage: FC = () => {
  const hash = generateHash();

  const renderQR = () => {
    if (!hash) {
      return null;
    }

    const originPath = getOriginPath();
    const path = `${originPath}${PATHS.STUDENT}/${hash}`;

    return (
      <div className={styles.qr}>
        <Typography.Title>Отсканируй QR код или перейди по ссылке</Typography.Title>
        <QRCode value={path} />
        <Button href={path}>
          {path}
        </Button>
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
