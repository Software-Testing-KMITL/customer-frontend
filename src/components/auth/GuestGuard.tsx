import { useAuth } from '@/hooks/useAuth';
import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const GuestGuard = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to="/" replace={true} />;

  return <>{children}</>;
};

export default GuestGuard;
