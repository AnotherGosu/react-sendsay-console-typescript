import styled from 'styled-components';

import Logo from 'components/icons/Logo';
import Title from 'components/common/Title';
import LoginBadge from './LoginBadge';
import LogoutButton from './LogoutButton';
import FullscreenButton from './FullscreenButton';

export default function Header() {
  return (
    <StyledHeader>
      <LeftSideContainer>
        <Logo />
        <Title />
      </LeftSideContainer>
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
  background: #f6f6f6;
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
