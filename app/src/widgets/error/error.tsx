import { type FC } from 'react';
import { Button, Typography } from 'antd';

import { ButtonHash } from 'shared/components';
import { PATHS } from 'config';

import { type IErrorPageProps } from './types';

export const Error: FC<IErrorPageProps> = ({ message, redirect = PATHS.HOME, ...props }) => (
  <div {...props}>
    <Typography.Title type="danger">{message}</Typography.Title>
    <ButtonHash type="primary" danger href={redirect}>Вернуться назад</ButtonHash>
  </div>
);