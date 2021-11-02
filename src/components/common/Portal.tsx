import {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

const portalRoot = document.querySelector('#portal-root') as HTMLElement;

const Portal = ({children}: {children: React.ReactNode}) => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    const current = el.current;

    portalRoot!.appendChild(current);
    return () => void portalRoot!.removeChild(current);
  }, []);

  return createPortal(children, el.current);
};

export default Portal;
