import {useState} from 'react';

export default function useFullcreen(): [boolean, () => void] {
  const [isFullscreen, setIsFullscreen] = useState(!!document.fullscreenElement);

  const toggleFullscreen = () => {
    isFullscreen ? document.exitFullscreen() : document.documentElement.requestFullscreen();
    setIsFullscreen(!isFullscreen);
  };

  return [isFullscreen, toggleFullscreen];
}
