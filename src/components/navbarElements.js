import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from "react-icons/fa"

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 10;
  media screen and (max-width: 768px) {
    display: none;

  }
`

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #FFC542;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #FFC542;
  padding: 10px 22px;
  color: #000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;  
  }
`