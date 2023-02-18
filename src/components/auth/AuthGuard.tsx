import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const AuthGuard = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/signin" replace={true} />;

  return <>{children}</>;
};

export default AuthGuard;
