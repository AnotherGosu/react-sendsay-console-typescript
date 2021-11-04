import styled from 'styled-components';
import {useFormik} from 'formik';
import {useAppSelector, useAppDispatch} from 'store';
import {authenticate} from 'store/slices/auth';

import Title from '../common/Title';
import Input from '../common/Input';
import Button from '../common/Button';
import LoginError from './LoginError';

import {LOGIN_FORM_INPUTS, BUTTONS} from 'components/constants';
import validateLogin from 'helpers/validateLogin';

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.auth.isLoading);

  const {handleSubmit, handleBlur, handleChange, values, errors, touched, isValid} = useFormik({
    initialValues: {login: '', sublogin: '', password: ''},
    onSubmit: (values) => dispatch(authenticate(values)),
    validate: validateLogin,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Title />
      <LoginError />
      {LOGIN_FORM_INPUTS.map(({name, ...rest}) => {
        const inputName = name as keyof typeof values;
        const isInvalid = Boolean(errors[inputName] && touched[inputName]);
        return (
          <Input
            key={name}
            name={name}
            value={values[inputName]}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={isInvalid}
            {...rest}
          />
        );
      })}
      <Button type="submit" disabled={!isValid} isLoading={isLoading}>
        {BUTTONS.login}
      </Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 520px;
  background: ${(props) => props.theme.background[100]};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 40px 30px;
`;
