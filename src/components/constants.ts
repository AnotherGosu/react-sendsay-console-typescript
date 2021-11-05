import {InputProps, TableObject} from 'helpers/types';
import {Column} from 'react-table';

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

export const NAV_LINKS = [
  {to: '/console', title: 'Консоль'},
  {to: '/statistics', title: 'Статистика'},
];

export const TABLE_HEADERS: Column<TableObject>[] = [
  {
    Header: 'Action',
    accessor: 'action',
  },
  {
    Header: 'Count',
    accessor: 'count',
  },
  {
    Header: 'Success',
    accessor: 'isSuccessful',
  },
];

export const DOUGHNUT_CHART = {
  labels: ['Успешные', 'Неуспешные'],
  datasets: [
    {
      label: 'Успешность запросов',
      backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
      borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
      borderWidth: 1,
    },
  ],
};
