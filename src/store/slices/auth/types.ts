import {LoginForm} from 'helpers/types';

export interface AuthState {
  login: string;
  sublogin: string;
  sessionKey: string;
  error: string;
  isLoading: boolean;
}

export type AuthenticateData = LoginForm;

export interface AuthenticateReturnValue {
  login: string;
  sublogin: string;
  sessionKey: string;
}

export interface AuthenticateConfig {
  rejectValue: string;
}
