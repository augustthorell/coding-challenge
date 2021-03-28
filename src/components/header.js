import React, { useState, useEffect } from 'react'

import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    ShoppingCart,
    ShoppingCartMobile
} from './navbarElements';

function Header({ size }) {

    const [nav, setOpenNav] = useState(false)

    const showNavbar = () => {
        setOpenNav(!nav)
    }

    useEffect(() => {
        if (size === true) {
            setOpenNav(true)
        } else if (size === false) {
            setOpenNav(false)
        }
    }, [!size])
    console.log('size ' + size)
    console.log('nav ' + nav)

    const variants = {
        open: {
            transform: 'translateY(0px)',
            transition: '0.5s',
        },
        close: {
            transform: 'translateY(-300px)',
            transition: '0.5s',
        },
    }
    const hamburgerStyle = {
        color: '#000',
        transition: '1s',
    }


    return (
        <>
            <Bars onClick={() => showNavbar()} style={nav ? hamburgerStyle : null}>
                {nav ? (
                    <FaTimes />
                ) : (
                    <FaBars />
                )}
            </Bars>
            <Nav
                style={nav ? variants.open : variants.close}>
                <NavMenu>
                    <NavLink to='/' exact activeStyle>Home</NavLink>
                    <NavLink to='/about' activeStyle>About</NavLink>
                    <NavLink to='/career' activeStyle>Career</NavLink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to='/partners' >Partners</NavBtnLink>
                    <NavLink to='/search' activeStyle><FaSearch /></NavLink>
                    <ShoppingCart to='/shopping-cart' activeStyle ><FaShoppingCart style={nav ? hamburgerStyle : ''} /></ShoppingCart>
                </NavBtn>

            </Nav>
            <ShoppingCartMobile to='/shopping-cart' activeStyle ><FaShoppingCart style={nav ? hamburgerStyle : ''} /></ShoppingCartMobile>

        </>
    )
}
export default Header