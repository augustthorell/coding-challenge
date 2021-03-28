import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
/* import { FaBars } from "react-icons/fa" */

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 10;
  position: absolute;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 300px;
    grid-template-columns: 1fr;
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

export const Bars = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 100;
    color: #fff;
  }
`

export const NavMenu = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    grid-column: 1;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-right: 0;
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

export const ShoppingCartMobile = styled(Link)`
    color: #000;
    
    @media screen and (max-width: 768px) {
      color: #fff;
      position: absolute;
      top: -1px;
      right: 50px;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
      z-index: 100;
    }
  }
`
export const ShoppingCart = styled(Link)`
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`