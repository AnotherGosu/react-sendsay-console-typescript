import {useAppSelector} from 'store';
import {shallowEqual} from 'react-redux';

import Button from '../../common/Button';
import {BUTTONS} from 'components/constants';

export default function SubmitButton() {
  const {isLoading, isRequestError} = useAppSelector((state) => state.console, shallowEqual);

  return (
    <Button type="submit" isLoading={isLoading} disabled={isRequestError}>
      {BUTTONS.console}
    </Button>
  );
}
