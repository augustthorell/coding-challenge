import React from 'react'
import { Card } from './slideshowElements';
function Cards(props) {


    return (

        <Card >
            <img
                src={props.src}
                alt={props.alt} />
            <h2>{props.title}</h2>
        </Card>

    )
}

export default Cards