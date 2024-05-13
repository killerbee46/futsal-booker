import { Navigate, Outlet } from 'react-router-dom';

export const RouteGuard = () => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to="auth/login" />;
};
