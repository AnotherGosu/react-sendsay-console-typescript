import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {NAV_LINKS} from 'components/constants';

export default function Nav() {
  return (
    <Navbar>
      {NAV_LINKS.map((link) => (
        <Link key={link.title} to={link.to}>
          {link.title}
        </Link>
      ))}
    </Navbar>
  );
}

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
