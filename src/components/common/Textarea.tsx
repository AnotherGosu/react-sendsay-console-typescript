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
  color: ${(props) => (props.isInvalid ? props.theme.error : props.theme.text)};
`;

const StyledTextArea = styled.textarea<{isInvalid: boolean}>`
  height: 100%;
  padding: 10px;
  border: 1px solid;
  border-color: ${(props) => (props.isInvalid ? props.theme.error : props.theme.border.idle)};
  border-radius: 5px;
  box-shadow: ${(props) => (props.isInvalid ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : '')};
  background: ${(props) => props.theme.background[100]};
  color: ${(props) => props.theme.text};
  font-size: 14px;
  resize: none;

  :hover {
    border-color: ${(props) => props.theme.border.active};
  }

  :focus {
    outline: ${(props) => '1px solid ' + props.theme.border.idle};
  }
`;
