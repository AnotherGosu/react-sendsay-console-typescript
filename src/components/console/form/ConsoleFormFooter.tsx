import styled from 'styled-components';

import SubmitButton from './SubmitButton';
import GitHubLink from 'components/common/GitHubLink';
import FormatButton from './FormatButton';

export default function ConsoleFormFooter() {
  return (
    <Footer>
      <SubmitButton />
      <GitHubLink />
      <FormatButton />
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;
