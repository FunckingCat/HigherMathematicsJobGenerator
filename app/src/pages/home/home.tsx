import { type FC } from 'react';

import { Page } from 'widgets';
import { PATHS } from 'config';
import { ButtonHash } from '../../shared/components';

import styles from './home.module.scss';

export const HomePage: FC = () => (
  <Page className={styles.wrapper}>
    <div className={styles.links}>
      <ButtonHash href={PATHS.ABOUT}>О программе</ButtonHash>
      <ButtonHash href={PATHS.PROFESSOR}>Сгенерировать вариант</ButtonHash>
      <ButtonHash href={PATHS.STUDENT}>Сгенерировать задание</ButtonHash>
    </div>
  </Page>
);
