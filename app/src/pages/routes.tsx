import { type FC } from 'react';
import { type RouteObject, useRoutes, Navigate } from 'react-router-dom';

import { PATHS } from 'config';
import { useAuth } from 'shared/context/authContext';

import { HomePage } from './home';
import { RegisterPage } from './register';
import { ProfessorPage } from './professor';
import { StudentPage } from './student';
import { Option } from './option';
import { QRPage } from './qr';
import { AboutPage } from './about';
import { LoginPage } from './login';
import { TasksPage } from './tasks';

export const AppRouter: FC = () => {
  const { user } = useAuth();

  const routes: RouteObject[] = [
    {
      path: PATHS.HOME,
      element: user ? <HomePage /> : <Navigate to={PATHS.STUDENT} replace />
    },
    {
      path: PATHS.STUDENT,
      element: <StudentPage />
    },
    {
      path: PATHS.LOGIN,
      element: user ? <Navigate to={PATHS.HOME} replace /> : <LoginPage />
    },
    {
      path: PATHS.REGISTER,
      element: user ? <Navigate to={PATHS.HOME} replace /> : <RegisterPage />
    },
    {
      path: PATHS.PROFESSOR_OPTION,
      element: user ? <ProfessorPage /> : <Navigate to={PATHS.LOGIN} replace />
    },
    {
      path: PATHS.STUDENT_OPTION,
      element: user ? <StudentPage /> : <Navigate to={PATHS.LOGIN} replace />
    },
    {
      path: PATHS.ABOUT,
      element: <AboutPage />
    },
    {
      path: PATHS.OPTION,
      element: user ? <Option /> : <Navigate to={PATHS.LOGIN} replace />
    },
    {
      path: PATHS.QR,
      element: user ? <QRPage /> : <Navigate to={PATHS.LOGIN} replace />
    },
    {
      path: PATHS.TASKS,
      element: user ? <TasksPage /> : <Navigate to={PATHS.LOGIN} replace />
    }
  ];

  return useRoutes(routes);
};
