import styled from 'styled-components';

import {APP_TITLE} from 'components/constants';

export default function Title() {
  return <StyledTitle>{APP_TITLE}</StyledTitle>;
}

const StyledTitle = styled.span`
  font-size: 22px;
`;
