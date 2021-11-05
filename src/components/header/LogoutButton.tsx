import {useAppDispatch} from 'store';
import {logout} from 'store/slices/auth';

import Logout from 'components/icons/Logout';
import IconButton from 'components/common/IconButton';
import {BUTTONS} from 'components/constants';

export default function LogoutButton() {
  const dispatch = useAppDispatch();
  const onLogoutButtonClick = () => dispatch(logout());

  return (
    <IconButton onClick={onLogoutButtonClick}>
      <span>{BUTTONS.logout}</span>
      <Logout />
    </IconButton>
  );
}
