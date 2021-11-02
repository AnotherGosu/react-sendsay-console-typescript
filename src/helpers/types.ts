import {InputHTMLAttributes} from 'react';

export interface LoginForm {
  login: string;
  sublogin: string;
  password: string;
}

export interface HistoryRecord {
  request: any;
  response: any;
  isSuccessful: boolean;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isOptional?: boolean;
  isInvalid?: boolean;
}
