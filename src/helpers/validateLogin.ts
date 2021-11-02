import {LoginForm} from './types';

export default function validateLogin(values: LoginForm) {
  const errors: any = {};
  const {login, password} = values;

  if (!login) {
    errors.login = 'Required';
  } else if (!/[a-zA-Z0-9.@_-]/.test(login)) {
    errors.login = 'Incorrect pattern';
  }
  if (!password) {
    errors.password = 'Required';
  } else if (/[а-я]/.test(password)) {
    errors.password = 'Incorrect pattern';
  }
  return errors;
}
