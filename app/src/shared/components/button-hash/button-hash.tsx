import React, { type FC } from 'react';
import { Button } from 'antd';

import { getOriginPath } from '../../utils';
import { type IButtonHashProps } from './types';

export const ButtonHash: FC<IButtonHashProps> = ({ href, children, ...props }) => {
  if (!href) {
    return (
      <Button {...props}>
        {children}
      </Button>
    );
  }

  const originPath = getOriginPath();
  const hashHref = `${originPath}${href}`;

  return (
    <Button href={hashHref} {...props}>
      {children}
    </Button>
  );
};
