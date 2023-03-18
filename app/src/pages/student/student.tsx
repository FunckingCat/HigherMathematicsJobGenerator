import { type FC } from 'react';
import { Page } from 'widgets';
import { useLocation } from 'react-router-dom';
import styles from './student.module.scss';
import { OptionParameters } from './option-parameters';
import { StudentOptionParameters } from './student-option-parameters';
import { Option } from './option';

export const StudentPage: FC = () => {
  const location = useLocation();
  const hasOption = location.pathname.includes('/student/');

  return (
    <Page className={styles.wrapper}>
      {hasOption ? <StudentOptionParameters /> : <OptionParameters />}
      <Option />
    </Page>
  );
};
