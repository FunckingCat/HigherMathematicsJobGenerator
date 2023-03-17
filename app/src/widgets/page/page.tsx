import { type FC } from 'react';

import { Container } from 'shared';

import { Header } from '../header';
import { type PagePropsType } from './types';
import styles from './page.module.scss';

export const Page: FC<PagePropsType> = ({ children, className, ...props }) => (
  <>
    <Header />
    <main className={styles.main}>
      <Container className={className} {...props}>{children}</Container>
    </main>
  </>
);
