import React, { useState } from 'react'
import Axios from 'axios'

function About() {

    const [joke, setJoke] = useState({
        setup: '',
        punchline: '',
    })

    const apiFetch = () => {
        Axios.get('https://official-joke-api.appspot.com/random_joke').then((response) => {
            console.log(response)
            setJoke({ setup: response.data.setup, punchline: response.data.punchline })
        })
    }

    const button = {
        border: '4px solid #000',
        backgroundColor: 'transparent',
        color: '#000',
        width: '200px',
        height: '50px',
        borderRadius: '40px',
        marginTop: '10px',
        cursor: 'pointer',
    }

    return (
        <div style={{ marginTop: '150px', color: '#000', textAlign: 'center' }}>
            <h1>About Page</h1>
            <h2>Here you have a Joke generator with the official joke api</h2>
            <button style={button} onClick={apiFetch}>Klick to get a joke</button>
            <div style={{ marginTop: '50px' }}>
                <span>{joke.setup} </span>
                <span>{joke.punchline}</span>
            </div>

        </div>
    )
}

export default About