import styled from 'styled-components';

import GitHub from '../icons/GitHub';
import {GITHUB} from 'components/constants';

export default function GitHubLink() {
  return (
    <Link href={GITHUB.url} target="_blank">
      <GitHub />
      <span>{GITHUB.id}</span>
    </Link>
  );
}

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #999999;
  text-decoration: none;

  :hover {
    color: #0055fb;

    svg path {
      fill: #0055fb;
    }
  }
`;
