import styled from 'styled-components';
import {useAppDispatch} from 'store';
import {makeRequest} from 'store/slices/console';

import ConsoleFormFooter from './ConsoleFormFooter';
import ConsoleFormFields from './ConsoleFormFields';

export default function ConsoleForm() {
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(makeRequest(null));
  };

  return (
    <Form onSubmit={onSubmit}>
      <ConsoleFormFields />
      <ConsoleFormFooter />
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr max-content;
  height: 100%;
`;
