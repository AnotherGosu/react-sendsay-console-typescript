import {InputProps} from 'helpers/types';

export const LOGIN_FORM_INPUTS: InputProps[] = [
  {label: 'Логин', name: 'login'},
  {label: 'Сублогин', name: 'sublogin', isOptional: true},
  {label: 'Пароль', name: 'password', type: 'password'},
];

export const CONSOLE_FORM = {
  requestTextarea: {
    label: 'Запрос:',
    name: 'request',
  },
  responseTextarea: {
    label: 'Ответ:',
    name: 'response',
  },
};

export const GITHUB = {
  url: 'https://github.com/AnotherGosu',
  id: '@AnotherGosu',
};

export const APP_TITLE = 'API-консолька';

export const OPTIONAL_LABEL = 'Опционально';

export const LOGIN_ERROR_TITLE = 'Не вышло';

export const COPY_ALERT_MESSAGE = 'Скопировано';

export const BUTTONS = {
  login: 'Войти',
  logout: 'Выйти',
  console: 'Отправить',
  format: 'Форматировать',
  dropdown: {
    makeRequest: 'Выполнить',
    copy: 'Скопировать',
    delete: 'Удалить',
  },
};

export const DROPDOW_WIDTH = 126;
