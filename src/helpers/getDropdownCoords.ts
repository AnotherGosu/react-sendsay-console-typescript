export default function getDropdownCoords({recordCoords, dropdownWidth}: {recordCoords: DOMRect; dropdownWidth: number}) {
  const {right, bottom} = recordCoords;

  //default position (parent right side)
  let xCoord = right - 126;

  //not enought space on left side (show dropdown 10px from left side)
  if (right < 126) {
    xCoord = 10;
  }

  //not enought space on right side (show dropdown 10px from right side)
  if (window.innerWidth - right < dropdownWidth) {
    xCoord = window.innerWidth - 136;
  }

  return {
    left: xCoord,
    top: bottom + 5,
  };
}
