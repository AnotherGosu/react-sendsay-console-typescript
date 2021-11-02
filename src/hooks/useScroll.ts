import {useEffect} from 'react';

export default function useScroll(scrollerRef: React.MutableRefObject<HTMLDivElement>) {
  useEffect(() => {
    const scroller = scrollerRef.current;

    const onScroll = (e: WheelEvent) => {
      e.preventDefault();
      scroller.scrollLeft += e.deltaY;
    };

    scroller.addEventListener('wheel', onScroll);
    return () => scroller.removeEventListener('wheel', onScroll);
  }, [scrollerRef]);
}
