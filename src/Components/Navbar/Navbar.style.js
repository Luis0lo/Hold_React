import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
  background-color: rgb(15, 8, 116);
  color: white;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-start;
  padding-left: 4%;
  /* if you swap sides  */
  /* flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%; */
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5%;
  /* if you swap sides  */
  /* flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px; */
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(NavLink)`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 10px 0;
  border-radius: 10px;
  padding: 0 15px;
  border: 1px solid rgb(15, 8, 116);

  @media (max-width: 700px) {
    display: none;
  }

  &.active {
    border-bottom: 1px solid #15cdfc;
    border-top: 1px solid #15cdfc;
  }

  &:hover {
    border-radius: 10px;
    border-bottom: 1px solid #15cdfc;
    border-top: 1px solid #15cdfc;
    transition: all 1s ease;
  }
`;

export const NavbarLinkExtended = styled(NavLink)`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
  border-radius: 50%;
`;

export const Name = styled(NavLink)`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    max-width: 50px;
    line-height: 1.5rem;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
