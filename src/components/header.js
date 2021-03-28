import React from 'react'
/* import { NavLink } from 'react-router-dom' */
import { FaSearch, FaShoppingCart } from "react-icons/fa"

import { IconContext } from 'react-icons'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './navbarElements';

function Header() {

    /* const header = {
        height: '100px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        position: 'fixed',
        top: '0',
        width: '100%',
        backgroundColor: '#fff',
        zIndex: '100',
    }
    const listContainer = {
        display: 'flex',
        justifyContent: 'space-evenly',
        gridColumn: '2',
        marginTop: '40px',
    }
    const buttons = {
        display: 'flex',
        justifyContent: 'center',
        gridColumn: '3',
        marginTop: '30px',
    }
    const partnersButton = {
        backgroundColor: '#FFC542',
        height: '40px',
        width: '100px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
    } */


    return (
        <>

            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/' exact activeStyle>Home</NavLink>
                    <NavLink to='/about' activeStyle>About</NavLink>
                    <NavLink to='/career' activeStyle>Career</NavLink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to='/partners'>Partners</NavBtnLink>
                    <NavLink to='/search' activeStyle><FaSearch /></NavLink>
                    <NavLink to='/shopping-cart' activeStyle><FaShoppingCart /></NavLink>
                </NavBtn>
            </Nav>

        </>
        /* <header style={header}>

            <div style={listContainer}>
                <NavLink to="/" exact={true} activeClassName="active">Home</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/career" activeClassName="active">Career</NavLink>

            </div>


            <ul style={buttons}>
                <button style={partnersButton}>Partners</button>
                <IconContext.Provider value={{
                    style: {
                        color: "#000",
                        width: '30px',
                        height: '30px',
                        padding: '5px',
                        margin: '5px',
                        marginLeft: '20px'
                    }
                }}>
                    <NavLink to="/search" activeClassName="active"><FaSearch /></NavLink>
                    <NavLink to="/checkout" activeClassName="active"><FaShoppingCart /></NavLink>
                </IconContext.Provider>
            </ul>

        </header> */
    )
}
export default Header