import {useAppSelector} from 'store';

import Button from '../../common/Button';
import {BUTTONS} from 'components/constants';

export default function SubmitButton() {
  const isLoading = useAppSelector((state) => state.console.isLoading);
  const isRequestError = useAppSelector((state) => state.console.isRequestError);

  return (
    <Button type="submit" isLoading={isLoading} disabled={isRequestError}>
      {BUTTONS.console}
    </Button>
  );
}
