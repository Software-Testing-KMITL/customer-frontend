import { useAuth } from '@/hooks/useAuth';
import { PropsWithChildren } from 'react';
import { LoadingScreen } from '../loading';

const AuthGuard = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <LoadingScreen />;

  return <>{children}</>;
};

export default AuthGuard;
