import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { IconContext } from 'react-icons'

export default function header() {

    const header = {
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
        justifyContent: 'space-evenly',
        gridColumn: '3',
        marginTop: '30px',
    }
    const partnersButton = {
        backgroundColor: '#FFC542',
        height: '40px',
        width: '100px',
        borderRadius: '4px',
        border: 'none',
    }


    return (
        <header style={header}>

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
                    }
                }}>
                    <FaSearch />
                    <FaShoppingCart />
                </IconContext.Provider>
            </ul>

        </header>
    )
}