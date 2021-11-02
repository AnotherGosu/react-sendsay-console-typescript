import styled from 'styled-components';
import {useAppSelector} from 'store';

export default function LoginBadge() {
  const login = useAppSelector((state) => state.auth.login);
  const sublogin = useAppSelector((state) => state.auth.sublogin);

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
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const Dots = styled.span`
  opacity: 0.2;
`;
