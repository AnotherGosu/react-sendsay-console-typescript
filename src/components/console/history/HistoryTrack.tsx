import styled from 'styled-components';
import {useAppSelector} from 'store';

import ClearHistoryButton from './ClearHistoryButton';
import HistoryRecord from './HistoryRecord';

export default function HistoryTrack() {
  const records = useAppSelector((state) => state.console.history);

  return (
    <Wrapper>
      <Scroller>
        <RecordsContainer>
          {records.map((record) => (
            <HistoryRecord key={record.request.action} {...record} />
          ))}
        </RecordsContainer>
      </Scroller>
      <ButtonContainer>
        <ClearHistoryButton />
      </ButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: #f6f6f6;
  height: 50px;
  position: relative;

  ::after,
  ::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 100%;
    background: linear-gradient(269.93deg, #f6f6f6 0.06%, rgba(246, 246, 246, 0) 99.93%);
    pointer-events: none;
    z-index: 2;
  }

  ::before {
    transform: rotate(180deg);
  }

  ::after {
    right: 50px;
  }
`;

const Scroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const RecordsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;
