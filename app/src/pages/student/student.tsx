import { type FC } from 'react';
import { Page } from 'widgets';

import styles from './student.module.scss';
import { OptionParameters } from './option-parameters';
import { Option } from './option';

export const StudentPage: FC = () => (
  <Page className={styles.wrapper}>
    <OptionParameters />
    <Option />
  </Page>
);
