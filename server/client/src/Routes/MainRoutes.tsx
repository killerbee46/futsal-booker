import { Outlet, createBrowserRouter } from 'react-router-dom';
import Login from '../Views/Login';
import SetUpWizard from '../Views/SetupWizard';
import DashboardLayout from '../Layout/dashboardlayout';
import Dashboard from '../Views/Dashboard';
import AddModules from '../Views/AddModules';
import Settings from '../Views/Settings';
import ModuleView from '../Views/ModuleView';
import AuthController from '../Views/Auth/AuthController';
import { RouteGuard } from './RouteGuard';

export const MainRoutes = createBrowserRouter([
  //protected routes
  {
    path: '/',
    element: <RouteGuard />,
    children: [
      {
        path: '/',
        element: <DashboardLayout />,
        children: [
          {
            path: '/',
            element: <Dashboard />
          },
          {
            path: '/add-modules',
            element: <AddModules />
          },
          {
            path: '/settings',
            element: <Settings />
          },
          {
            path: ':module',
            element: <Outlet />,
            children: [
              {
                path: ':action',
                element: <ModuleView />
              }
            ]
          }
        ]
      }
    ]
  },
  //public routes
  {
    path: '/auth',
    element: <Outlet />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: ':action',
        element: <AuthController />
      }
    ]
  },
  {
    path: '/setup',
    element: <SetUpWizard />
  }
]);
