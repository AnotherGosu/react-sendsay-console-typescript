import {useAppDispatch} from 'store';
import {consoleSlice} from 'store/slices/console';

import IconButton from 'components/common/IconButton';
import Cross from 'components/icons/Cross';

export default function ClearHistoryButton() {
  const dispatch = useAppDispatch();
  const onClearHistoryButtonClick = () => dispatch(consoleSlice.actions.clearHistory());

  return (
    <IconButton onClick={onClearHistoryButtonClick}>
      <Cross />
    </IconButton>
  );
}
