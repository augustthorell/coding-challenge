import React from 'react'
import StartImage from '../assets/startImage.png'
import { WelcomeText } from './welcomeBlockElements'

export default function welcomeBlock() {
    const welcomeBlockWrapper = {
        width: '100%',
        position: 'relative',
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

            <WelcomeText >
                <h1>Welcome to HappyWeb</h1>
                <button style={buttonStyle}>See more</button>
            </WelcomeText>


        </div>
    )
}


