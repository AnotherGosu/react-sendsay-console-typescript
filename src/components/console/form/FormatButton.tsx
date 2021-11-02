import {useAppDispatch} from 'store';
import {consoleSlice} from 'store/slices/console';

import IconButton from 'components/common/IconButton';
import Format from 'components/icons/Format';
import {BUTTONS} from 'components/constants';

export default function FormatButton() {
  const dispatch = useAppDispatch();
  const onFormatButtonClick = () => dispatch(consoleSlice.actions.formatRequest());

  return (
    <IconButton onClick={onFormatButtonClick}>
      <Format />
      <span>{BUTTONS.format}</span>
    </IconButton>
  );
}
