import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fill?: boolean;
  stroke?: boolean;
}

export default function IconButton({children, fill = false, stroke = true, ...props}: Props) {
  return (
    <Button type="button" $fill={fill} $stroke={stroke} {...props}>
      {children}
    </Button>
  );
}

const Button = styled.button<{$fill: boolean; $stroke: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  border: none;
  background: transparent;

  :focus {
    outline: 2px solid rgba(69, 165, 255, 0.5);
    outline-offset: 4px;
    border-radius: 7px;
  }

  :hover {
    color: #0055fb;

    svg,
    path,
    g,
    circle {
      fill: ${(props) => (props.$fill ? '#0055fb' : 'none')};
      stroke: ${(props) => (props.$stroke ? '#0055fb' : 'none')};
      fill-opacity: 1;
    }
  }
`;
