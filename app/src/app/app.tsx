import { type FC } from 'react';
import { HashRouter } from 'react-router-dom';

import { AppRouter } from 'pages';

import './design/index.scss';

export const App: FC = () => (
  <HashRouter>
    <AppRouter />
  </HashRouter>
);
