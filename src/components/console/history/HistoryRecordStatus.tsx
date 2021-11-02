import styled from 'styled-components';

export default function HistoryRecordStatus({isSuccessful}: {isSuccessful: boolean}) {
  return <StatusIcon isSuccessful={isSuccessful} />;
}

const StatusIcon = styled.i<{isSuccessful: boolean}>`
  width: 10px;
  height: 10px;
  background: ${(props) => (props.isSuccessful ? '#30b800' : '#cf2c00')};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
`;
