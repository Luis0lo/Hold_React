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
  Logs,
  LoginIcon,
  LogoutIcon,
} from './Navbar.style';
import LogoImg from '../../assets/logo.png';
import { useAuth } from '../Context/AuthContext';

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const { currentUser, logout } = useAuth();

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
          <Name to="/">Luis Rodrigues</Name>
          {!currentUser && (
            <Logs to="/login">
              <LoginIcon />
            </Logs>
          )}
          {currentUser && (
            <Logs to="/">
              <LogoutIcon
                onClick={() => {
                  logout();
                }}
              />
            </Logs>
          )}
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
