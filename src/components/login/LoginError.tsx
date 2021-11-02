import styled from 'styled-components';
import {useAppSelector} from 'store';

import SadFace from '../icons/SadFace';
import {LOGIN_ERROR_TITLE} from 'components/constants';

export default function LoginError() {
  const error = useAppSelector((state) => state.auth.error);
  if (!error) return null;

  return (
    <Wrapper>
      <SadFace />
      <Title>{LOGIN_ERROR_TITLE}</Title>
      <Query>{error}</Query>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 8px;
  align-items: center;
  padding: 10px;
  background: rgba(207, 44, 0, 0.1);
  border-radius: 5px;
  color: #cf2c00;
`;

const Title = styled.span`
  font-size: 18px;
`;

const Query = styled.span`
  font-size: 12px;
  opacity: 0.5;
  grid-column: 2;
  grid-row: 2;
`;
