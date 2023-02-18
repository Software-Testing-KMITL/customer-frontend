import { UserType } from '@/types';

export interface IAuthState {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: UserType | null;
  token: string | null;
}
