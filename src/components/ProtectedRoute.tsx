import { ReactNode } from 'react';
import { Navigate, Route, Outlet } from 'react-router';
import { useAuth } from '../hooks/useAuth';

interface ProtectedRouteProps {
  redirectTo: string;
  children: ReactNode;
}

function ProtectedRoute(props: ProtectedRouteProps) {
  const { children, redirectTo } = props;

  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
