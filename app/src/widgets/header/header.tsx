import { type FC } from 'react';
import { clsx } from 'clsx';

import { Container, Logo } from 'shared';

import { type HeaderPropsType } from './types';
import styles from './header.module.scss';

export const Header: FC<HeaderPropsType> = ({ className, ...props }) => (
  <header className={clsx(styles.header, className)} {...props}>
    <Container>
      <Logo />
    </Container>
  </header>
);
