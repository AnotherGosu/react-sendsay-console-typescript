import styled from 'styled-components';

import LoadingSpinner from './LoadingSpinner';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export default function Button({children, isLoading = false, ...props}: Props) {
  return (
    <StyledButton type="button" {...props}>
      {isLoading ? <LoadingSpinner /> : children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: max-content;
  min-width: 100px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  color: white;
  background: linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  :focus {
    outline: 2px solid #45a5ff;
  }

  :hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }

  :active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }

  :disabled {
    background: linear-gradient(0deg, #c4c4c4, #c4c4c4), linear-gradient(180deg, #45a6ff 0%, #0055fb 100%);
  }
`;
