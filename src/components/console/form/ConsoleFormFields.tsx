import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from 'store';
import {consoleSlice} from 'store/slices/console';

import SplitTabs from './SplitTabs';
import Textarea from 'components/common/Textarea';
import {CONSOLE_FORM} from 'components/constants';

export default function ConsoleFormFields() {
  const dispatch = useAppDispatch();
  const request = useAppSelector((state) => state.console.request);
  const response = useAppSelector((state) => state.console.response);
  const isRequestError = useAppSelector((state) => state.console.isRequestError);
  const isResponseError = useAppSelector((state) => state.console.isResponseError);

  const onRequestChange = useCallback(({target}) => dispatch(consoleSlice.actions.setRequest(target.value)), [dispatch]);

  return (
    <SplitTabs>
      <Textarea
        label={CONSOLE_FORM.requestTextarea.label}
        name={CONSOLE_FORM.requestTextarea.name}
        isInvalid={isRequestError}
        value={request}
        onChange={onRequestChange}
      />
      <Textarea
        label={CONSOLE_FORM.responseTextarea.label}
        name={CONSOLE_FORM.responseTextarea.name}
        readOnly
        isInvalid={isResponseError}
        value={response}
      />
    </SplitTabs>
  );
}
