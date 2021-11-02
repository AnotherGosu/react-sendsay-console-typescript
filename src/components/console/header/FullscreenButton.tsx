import useFullcreen from 'hooks/useFullscreen';

import IconButton from 'components/common/IconButton';
import FullscreenOn from 'components/icons/FullscreenOn';
import FullscreenOff from 'components/icons/FullscreenOff';

export default function FullscreenButton() {
  const [isFullscreen, toggleFullscreen] = useFullcreen();

  return <IconButton onClick={toggleFullscreen}>{isFullscreen ? <FullscreenOff /> : <FullscreenOn />}</IconButton>;
}
