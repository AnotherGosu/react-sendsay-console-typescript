import {useEffect, RefObject} from 'react';

export default function useOutsideClick(ref: RefObject<any>, toggle: () => void) {
  useEffect(() => {
    const closeDropdownOutside = (e: any) => {
      if (ref?.current && !ref.current.contains(e.target)) {
        toggle();
      }
    };

    document.addEventListener('mousedown', closeDropdownOutside, {capture: true});

    return () => {
      document.removeEventListener('mousedown', closeDropdownOutside, {capture: true});
    };
  });
}
