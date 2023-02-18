import { createContext } from 'react';
import { IAuthState } from './types';

export interface IAuthContext extends IAuthState {
  signin: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
