import {memo} from 'react';
import styled from 'styled-components';
import {COPY_ALERT_MESSAGE} from 'components/constants';

interface Props {
  isCopyAnimation: boolean;
  triggerCopyAnimation: React.DispatchWithoutAction;
}

const CopyAlert = memo(({isCopyAnimation, triggerCopyAnimation}: Props) => {
  return (
    <Alert isCopyAnimation={isCopyAnimation} onAnimationEnd={triggerCopyAnimation}>
      {COPY_ALERT_MESSAGE}
    </Alert>
  );
});

export default CopyAlert;

const Alert = styled.span<{isCopyAnimation: boolean}>`
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
  animation: ${(props) => (props.isCopyAnimation ? 'slideDown 2s' : 'none')};

  @keyframes slideDown {
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`;
