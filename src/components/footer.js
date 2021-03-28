import React from 'react'
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { IconContext } from 'react-icons'
import '../style.css'

function Footer({ size }) {

    console.log(size)
    const footer = {
        backgroundColor: '#fff',
        height: '105px',
        width: '100%',
        position: 'absolute',
        bottom: '0',
        padding: '30px 50px',

    }


    return (
        <footer style={footer} className={size ? 'footerDesktop' : 'footerMobile'}>

            <div>
                <IconContext.Provider value={{
                    style: {
                        color: "#fff",
                        backgroundColor: "#ffc542",
                        width: '40px',
                        height: '40px',
                        padding: '5px',
                        borderRadius: '50%',
                        margin: '5px',
                    }
                }}>
                    <a href="http://facebook.com"><FaFacebookF /></a>
                    <a href="http://instagram.com"><FaInstagram /></a>
                    <a href="http://linkedin.com"><FaLinkedinIn /></a>
                </IconContext.Provider>
            </div>

            <p>&copy; {(new Date().getFullYear())} All Rights Reserved.</p>


        </footer >
    )
}

export default Footer

