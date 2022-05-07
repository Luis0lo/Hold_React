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
  Name,
  OpenLinksButton,
} from './Navbar.style';
import LogoImg from '../../assets/logo.png';

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
          <Name to="/">Luis Rodrigues</Name>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/holdings">Holdings</NavbarLink>
            <NavbarLink to="/quotes">Quotes</NavbarLink>
            <NavbarLink to="/weather">Weather</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/holdings">Holdings</NavbarLinkExtended>
          <NavbarLinkExtended to="/quotes">Quotes</NavbarLinkExtended>
          <NavbarLinkExtended to="/weather">Weather</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
