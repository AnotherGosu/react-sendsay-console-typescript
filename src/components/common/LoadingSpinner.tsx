import styled from 'styled-components';

export default function LoadingSpinner() {
  return (
    <Wrapper>
      {bars.map((bar, idx) => (
        <div key={idx} style={bar} />
      ))}
    </Wrapper>
  );
}

const bars = [0, 1, 2, 3, 4, 5, 6, 7].map((count) => ({
  transform: `rotate(${count * 45}deg)`,
  animationDelay: `-0.${7 - count}s`,
}));

const Wrapper = styled.div`
  color: white;
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;

  div {
    transform-origin: 12px 12px;
    animation: spinner 0.7s linear infinite;

    ::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 11px;
      width: 2px;
      height: 6px;
      border-radius: 20%;
      background: #fff;
    }
  }

  @keyframes spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
