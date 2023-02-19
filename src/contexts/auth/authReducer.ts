import { UserType } from '@/types';
import { IAuthState } from './types';

type ActionType =
  | {
      type: 'INITIALIZE';
      payload: {
        isAuthenticated: boolean;
        user: UserType | null;
      };
    }
  | {
      type: 'SIGNIN';
      payload: { user: UserType | null };
    }
  | {
      type: 'SIGNOUT';
    };

export const authReducer = (state: IAuthState, action: ActionType) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        isInitialized: true,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };
    case 'SIGNIN':
      return {
        ...state,
        isInitialized: true,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'SIGNOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
