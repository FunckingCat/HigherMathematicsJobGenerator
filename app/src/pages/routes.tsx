import { type FC } from 'react';
import { type RouteObject, useRoutes } from 'react-router-dom';

import { PATHS } from 'config';

import { HomePage } from './home';
import { ProfessorPage } from './professor';
import { StudentPage } from './student';
import { LoginPage } from './login';

const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <HomePage />
  },
  {
    path: PATHS.PROFESSOR,
    element: <ProfessorPage />
  },
  {
    path: PATHS.STUDENT,
    element: <StudentPage />
  },
  {
    path: PATHS.LOGIN,
    element: <LoginPage />
  }
];

export const AppRouter: FC = () => useRoutes(routes);
