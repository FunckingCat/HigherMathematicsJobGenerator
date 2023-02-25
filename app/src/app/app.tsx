import { type FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from 'pages';

import './design/index.scss';

export const App: FC = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
