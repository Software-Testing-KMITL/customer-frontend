import { PropsWithChildren, useEffect, useReducer } from 'react';
import { useSnackbar } from 'notistack';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { IAuthState } from './types';

import { signin as APISignin } from '@/api';
import { LoadingScreen } from '@/components/loading';
import axios from '@/utils/axios';
import { UserType } from '@/types';

const initialState: IAuthState = {
  user: null,
  isInitialized: false,
  isAuthenticated: false,
};

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { enqueueSnackbar } = useSnackbar();

  // Initialize the auth state
  useEffect(() => {
    const initialize = async () => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken) {
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        const { data } = await axios.get('/users/profile');

        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: true,
            user: data.profile,
          },
        });
      } else {
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  // Signin Logic
  const signin = async (_data: { username: string; password: string }) => {
    try {
      const signinDispatch = (user: UserType) => {
        dispatch({
          type: 'SIGNIN',
          payload: {
            user,
          },
        });
      };

      APISignin(_data, signinDispatch);
    } catch (error) {
      enqueueSnackbar('Invalid username or password', { variant: 'error' });
    }
  };

  const signout = async () => {
    localStorage.removeItem('accessToken');
    axios.defaults.headers.common.Authorization = ``;

    dispatch({ type: 'SIGNOUT' });
    console.log('signout', { state });
  };

  if (!state.isInitialized) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider value={{ ...state, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
