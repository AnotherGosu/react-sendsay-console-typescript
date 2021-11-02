import {memo, TextareaHTMLAttributes} from 'react';
import styled from 'styled-components';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  isInvalid: boolean;
}

const Textarea = memo(({label, isInvalid, ...props}: Props) => {
  return (
    <Wrapper>
      <Label htmlFor={props.id || props.name} isInvalid={isInvalid}>
        {label}
      </Label>
      <StyledTextArea {...props} isInvalid={isInvalid} />
    </Wrapper>
  );
});

export default Textarea;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 3px;
`;

const Label = styled.label<{isInvalid: boolean}>`
  font-size: 12px;
  color: ${(props) => (props.isInvalid ? '#cf2c00' : '#999999')};
`;

const StyledTextArea = styled.textarea<{isInvalid: boolean}>`
  height: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border: ${(props) => (props.isInvalid ? '1px solid #cf2c00' : '1px solid rgba(0, 0, 0, 0.2)')};
  border-radius: 5px;
  box-shadow: ${(props) => (props.isInvalid ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : '')};
  font-size: 14px;
  resize: none;

  :hover {
    border-color: rgba(0, 0, 0, 0.4);
  }

  :focus {
    outline: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
