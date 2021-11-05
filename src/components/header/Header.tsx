import styled from 'styled-components';

import Logo from 'components/icons/Logo';
import Title from 'components/common/Title';
import ThemeButton from './ThemeButton';
import Nav from './Nav';
import LoginBadge from './LoginBadge';
import LogoutButton from './LogoutButton';
import FullscreenButton from './FullscreenButton';

export default function Header() {
  return (
    <StyledHeader>
      <LeftSideContainer>
        <ThemeButton />
        <Logo />
        <Title />
      </LeftSideContainer>
      <Nav />
      <RightSideContainer>
        <LoginBadge />
        <LogoutButton />
        <FullscreenButton />
      </RightSideContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: ${(props) => props.theme.background[200]};
  border-bottom: ${(props) => '1px solid ' + props.theme.border.idle};
`;

const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
