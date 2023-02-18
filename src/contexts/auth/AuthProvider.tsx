import { PropsWithChildren, useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { IAuthState } from './types';

const initialState: IAuthState = {
  user: null,
  token: null,
  isInitialized: false,
  isAuthenticated: false,
};

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signin = () => {};

  return (
    <AuthContext.Provider value={{ ...state, signin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
