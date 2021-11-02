import {memo, useRef} from 'react';
import styled from 'styled-components';
import useHistoryRecord from 'hooks/useHistoryRecord';

import CopyAlert from './CopyAlert';
import Dots from 'components/icons/Dots';
import HistoryRecordStatus from './HistoryRecordStatus';
import Dropdown from './Dropdown';
import {HistoryRecord as HistoryRecordType} from 'helpers/types';

const HistoryRecord = memo(({request, isSuccessful}: HistoryRecordType) => {
  const recordRef = useRef<HTMLDivElement>(null!);
  const {onHistoryRecordClick, copyCounter, isDropdownOpen, ...rest} = useHistoryRecord(recordRef);

  return (
    <Wrapper onClick={onHistoryRecordClick} ref={recordRef}>
      {!!copyCounter && <CopyAlert key={copyCounter} />}
      <HistoryRecordStatus isSuccessful={isSuccessful} />
      <span>{request.action}</span>
      <Dots />
      {isDropdownOpen && <Dropdown request={request} {...rest} />}
    </Wrapper>
  );
});

export default HistoryRecord;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
  height: 30px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;

  :hover {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  }
`;
