import styled from 'styled-components';
import {useAppSelector} from 'store';
import {shallowEqual} from 'react-redux';

export default function LoginBadge() {
  const {login, sublogin} = useAppSelector((state) => state.auth, shallowEqual);

  return (
    <Wrapper>
      <span>{login}</span>
      {sublogin && <Dots>:</Dots>}
      {sublogin && <span>{sublogin}</span>}
    </Wrapper>
  );
}

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  gap: 5px;
  border: 1px solid;
  border-color: ${(props) => props.theme.border.idle};
  border-radius: 5px;
`;

const Dots = styled.span`
  opacity: 0.2;
`;
