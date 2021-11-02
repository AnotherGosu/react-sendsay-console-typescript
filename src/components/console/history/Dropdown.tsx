import {useRef} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {consoleSlice, makeRequest} from 'store/slices/console';
import getDropdownCoords from 'helpers/getDropdownCoords';
import useOutsideClick from 'hooks/useOutsideClick';

import Portal from 'components/common/Portal';
import {BUTTONS, DROPDOW_WIDTH} from 'components/constants';

interface Props {
  request: string;
  recordCoords: DOMRect;
  toggleDropdown: () => void;
  triggerCopyAnimation: React.DispatchWithoutAction;
}

export default function Dropdown({request, recordCoords, toggleDropdown, triggerCopyAnimation}: Props) {
  const dispatch = useDispatch();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const stringRequest = JSON.stringify(request, null, 2);

  const onMakeRequestButtonClick = () => dispatch(makeRequest(stringRequest));
  const onCopyButtonClick = () => {
    navigator.clipboard.writeText(stringRequest);
    triggerCopyAnimation();
  };
  const onDeleteButtonClick = () => dispatch(consoleSlice.actions.deleteHistoryRecord(request));

  useOutsideClick(dropdownRef, toggleDropdown);

  const dropdownWidth = dropdownRef.current?.clientWidth || DROPDOW_WIDTH;
  const coords = getDropdownCoords({recordCoords, dropdownWidth});

  return (
    <Portal>
      <Wrapper style={{...coords}} ref={dropdownRef}>
        <Button onClick={onMakeRequestButtonClick}>{BUTTONS.dropdown.makeRequest}</Button>
        <Button onClick={onCopyButtonClick}>{BUTTONS.dropdown.copy}</Button>
        <ButtonContainer>
          <DeleteButton onClick={onDeleteButtonClick}>{BUTTONS.dropdown.delete}</DeleteButton>
        </ButtonContainer>
      </Wrapper>
    </Portal>
  );
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  border-radius: 3px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  background: #ffffff;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  padding: 10px 15px;
  text-align: left;
  font-size: 16px;

  :hover {
    background: #0055fb;
    color: white;
  }
`;

const DeleteButton = styled(Button)`
  width: 100%;
  :hover {
    background: #cf2c00;
  }
`;

const ButtonContainer = styled.div`
  padding: 5px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;
