import {useReducer, useState} from 'react';

export default function useHistoryRecord(recordRef: React.MutableRefObject<HTMLDivElement>) {
  const [isDropdownOpen, toggleDropdown] = useReducer((state) => !state, false);

  //necessary to rerender copy alert (replay animation)
  const [isCopyAnimation, triggerCopyAnimation] = useReducer((state) => !state, false);

  //control history record coordinates to position dropdown
  const [recordCoords, setRecordCoords] = useState<DOMRect>({} as DOMRect);

  const onHistoryRecordClick = () => {
    const recordCoords = recordRef.current.getBoundingClientRect();
    setRecordCoords(recordCoords);
    toggleDropdown();
  };

  return {isDropdownOpen, recordCoords, isCopyAnimation, triggerCopyAnimation, onHistoryRecordClick, toggleDropdown};
}
