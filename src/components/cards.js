import React from 'react'

function Cards(props) {
    const slideshowItem = {
        borderRadius: '10px',
        background: 'linear-gradient(360deg, #FFBA08 -1.68%, #FFE29F 101.3%)',
        transition: '0.5s ease',
        cursor: 'pointer',
        position: 'relative',
        minWidth: '200px',
        minHeight: '300px',

    }
    const slideshowImage = {
        margin: 'auto',
        display: 'block',
        width: '100%',
        maxWidth: '300px',
        marginBottom: '50px',
    }
    const cardText = {
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translate(-50%, 0%)',
    }
    return (

        <div style={slideshowItem} >
            <img
                src={props.src}
                style={slideshowImage}
                alt={props.alt} />
            <h2 style={cardText}>{props.title}</h2>
        </div>

    )
}

export default Cards