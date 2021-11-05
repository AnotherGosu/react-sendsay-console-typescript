import styled, {css} from 'styled-components';

const sharedStyles = css`
  border-bottom: 1px solid;
  border-right: 1px solid;
  border-color: ${(props) => props.theme.border.idle};

  :last-child {
    border-right: 0;
  }
`;

export const Table = styled.table`
  border-spacing: 0;
  border: 1px solid;
  border-color: ${(props) => props.theme.border.idle};
  border-radius: 5px;
`;

export const Head = styled.thead``;

export const Row = styled.tr`
  :last-child {
    td {
      border-bottom: 0;
    }
  }
`;

export const Header = styled.th`
  ${sharedStyles}
  font-size: 24px;
`;

export const Body = styled.tbody`
  text-align: center;
  font-size: 18px;
`;

export const Cell = ({value, ...props}: any) => {
  return typeof value === 'boolean' ? <BooleanCell isSuccessful={value} {...props} /> : <StyledCell {...props} />;
};

const StyledCell = styled.td`
  ${sharedStyles}
`;

const BooleanCell = styled(StyledCell)<{isSuccessful: boolean}>`
  ::after {
    content: ${(props) => (props.isSuccessful ? '"✅"' : '"❌"')};
  }
`;
