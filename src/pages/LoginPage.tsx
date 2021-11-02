import {useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {useAppSelector} from 'store';

import Logo from 'components/icons/Logo';
import LoginForm from 'components/login/LoginForm';
import GitHubLink from 'components/common/GitHubLink';

export default function LoginPage() {
  const history = useHistory();
  const isLoggedIn = useAppSelector((state) => !!state.auth.sessionKey?.length);

  useEffect(() => {
    if (isLoggedIn) history.push('/console');
  }, [history, isLoggedIn]);

  return (
    <Page>
      <Logo />
      <LoginForm />
      <GitHubLink />
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
  background: #ffffff;
`;
