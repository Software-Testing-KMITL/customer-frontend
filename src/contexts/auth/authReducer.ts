import { UserType } from '../../types';
import { IAuthState } from './types';

type ActionType =
  | {
      type: 'INITIALIZE';
      payload: {
        isAuthenticated: boolean;
        accessToken: string | null;
        user: UserType | null;
      };
    }
  | {
      type: 'LOGIN';
      payload: { accessToken: string; user: UserType | null };
    };

export const authReducer = (state: IAuthState, action: ActionType) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        isInitialized: true,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    case 'LOGIN':
      return {
        ...state,
        isInitialized: true,
        isAuthenticated: true,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    default:
      return state;
  }
};
