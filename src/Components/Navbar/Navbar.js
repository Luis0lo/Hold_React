import {
  NavbarExtendedContainer,
  LeftContainer,
  NavbarContainer,
  NavbarInnerContainer,
  RightContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo
} from './Navbar.style';
import LogoImg from '../../assets/logo.png'

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/holdings">Holdings</NavbarLink>
            <NavbarLink to="/quotes">Quotes</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
            <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  );
};

export default Navbar;
