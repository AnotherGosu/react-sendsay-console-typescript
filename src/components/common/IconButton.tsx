import {useAppSelector} from 'store';
import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fill?: boolean;
  stroke?: boolean;
}

export default function IconButton({children, fill = false, stroke = true, ...props}: Props) {
  const mode = useAppSelector((state) => state.theme.mode);
  return (
    <Button type="button" $fill={fill} $stroke={stroke} mode={mode} {...props}>
      {children}
    </Button>
  );
}

const Button = styled.button<{$fill: boolean; $stroke: boolean; mode: 'light' | 'dark'}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  border: none;
  background: transparent;
  color: ${(props) => props.theme.text};

  i {
    width: 24px;
    height: 24px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 24px;
    filter: ${(props) =>
      props.mode === 'dark' ? 'invert(100%) sepia(100%) saturate(38%) hue-rotate(271deg) brightness(110%) contrast(110%)' : 'none'};
  }

  svg,
  path,
  g,
  circle {
    fill: ${({$fill, theme}) => ($fill ? theme.text : 'none')};
    stroke: ${({$stroke, theme}) => ($stroke ? theme.text : 'none')};
  }

  :hover {
    color: #0055fb;

    i {
      filter: invert(20%) sepia(69%) saturate(4570%) hue-rotate(216deg) brightness(98%) contrast(107%);
    }

    svg,
    path,
    g,
    circle {
      fill: ${(props) => (props.$fill ? '#0055fb' : 'none')};
      stroke: ${(props) => (props.$stroke ? '#0055fb' : 'none')};
      fill-opacity: 1;
    }
  }

  :focus {
    outline: 2px solid rgba(69, 165, 255, 0.5);
    outline-offset: 4px;
    border-radius: 7px;
  }
`;
