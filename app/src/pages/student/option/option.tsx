import { type FC } from 'react';
import { OPTION } from './constants';

export const Option: FC = () => (
  <>
    <p>
      Пользователь:
      {OPTION.user}
    </p>
    <p>
      Код варианта:
      {OPTION.optionCode}
    </p>
  </>
);
