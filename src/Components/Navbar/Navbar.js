import { useState } from 'react';
import {
  NavbarExtendedContainer,
  LeftContainer,
  NavbarContainer,
  NavbarInnerContainer,
  RightContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavbarLinkExtended,
  Logo,
  OpenLinksButton,
} from './Navbar.style';
import LogoImg from '../../assets/logo.png';

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/holdings">Holdings</NavbarLink>
            <NavbarLink to="/quotes">Quotes</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/holdings">Holdings</NavbarLinkExtended>
          <NavbarLinkExtended to="/quotes">Quotes</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
