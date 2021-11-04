import {memo} from 'react';
import styled from 'styled-components';

import {InputProps} from 'helpers/types';
import {OPTIONAL_LABEL} from 'components/constants';

const Input = memo(({label = 'Поле ввода', isOptional = false, isInvalid = false, ...props}: InputProps) => {
  return (
    <div>
      <LabelContainer>
        <Label htmlFor={props.id || props.name} isInvalid={isInvalid}>
          {label}
        </Label>
        {isOptional && <OptionalLabel>{OPTIONAL_LABEL}</OptionalLabel>}
      </LabelContainer>
      <StyledInput autoComplete="off" isInvalid={isInvalid} {...props} />
    </div>
  );
});

export default Input;

const StyledInput = styled.input<{isInvalid: boolean}>`
  width: 100%;
  padding: 5px 10px;
  font-size: 18px;
  border: 1px solid;
  border-color: ${(props) => (props.isInvalid ? props.theme.error : props.theme.border.idle)};
  border-radius: 5px;
  box-shadow: ${(props) => (props.isInvalid ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : '')};
  background: ${(props) => props.theme.background[100]};
  color: ${(props) => props.theme.text};

  :hover {
    border-color: ${(props) => props.theme.border.active};
  }

  :focus {
    outline: ${(props) => '1px solid ' + props.theme.border.idle};
  }
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Label = styled.label<{isInvalid: boolean}>`
  font-size: 16px;
  color: ${(props) => (props.isInvalid ? props.theme.error : props.theme.text)};
`;

const OptionalLabel = styled.span`
  font-size: 12px;
  color: #999999;
`;
