import { createContext } from 'react';
import { IAuthState } from './types';

export interface IAuthContext extends IAuthState {
  signin: (_data: { username: string; password: string }) => void;
  signout: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
