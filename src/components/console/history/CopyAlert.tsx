import styled from 'styled-components';

import {COPY_ALERT_MESSAGE} from 'components/constants';

export default function CopyAlert() {
  return <Alert>{COPY_ALERT_MESSAGE}</Alert>;
}

const Alert = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f6f6f6;
  border-radius: 5px;
  font-size: 12px;
  transform: translateY(-100%);
  animation: slideDown 2s;

  @keyframes slideDown {
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`;
