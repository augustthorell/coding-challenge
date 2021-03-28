import React from 'react'
import StartImage from '../assets/startImage.png'

export default function welcomeBlock() {
    const welcomeBlockWrapper = {
        width: '100%',
        position: 'relative',
    }
    const welcomeText = {
        position: 'absolute',
        top: '50%',
        right: '5vw',
        width: '400px',

        fontSize: '30px',
        margin: '0',
        transform: 'translate(-0%, -50%)',
    }
    const buttonStyle = {
        border: '4px solid #fff',
        backgroundColor: 'transparent',
        color: '#fff',
        width: '200px',
        height: '50px',
        borderRadius: '40px',
        marginTop: '10px',
        cursor: 'pointer',
    }
    return (
        <div style={welcomeBlockWrapper}>
            <img src={StartImage} style={{ width: '100%', maxHeight: '900px' }} alt="Woman who sits with her phone" />

            <div style={welcomeText}>
                <h1>Welcome to HappyWeb</h1>
                <button style={buttonStyle}>See more</button>
            </div>


        </div>
    )
}


