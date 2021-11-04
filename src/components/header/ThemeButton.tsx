import styled from 'styled-components';
import {useAppSelector, useAppDispatch} from 'store';
import {themeSlice} from 'store/slices/theme';

import IconButton from 'components/common/IconButton';

export default function ThemeButton() {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();
  const switchTheme = () => dispatch(themeSlice.actions.setMode());

  return <IconButton onClick={switchTheme}>{mode === 'light' ? <MoonIcon /> : <SunIcon />}</IconButton>;
}

const SunIcon = styled.i`
  background: url('icons/sun.png');
`;

const MoonIcon = styled.i`
  background: url('icons/moon.png');
`;
