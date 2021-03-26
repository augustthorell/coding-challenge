import React from 'react'
import SlideShowItem from './slideShowItem'

function SlideShowList({ text }) {

    return (
        <div>
            <h2>Section 2</h2>
            {text.map(data => (
                <SlideShowItem key={data.id} text={data} />
            ))}
        </div>
    )
}

export default SlideShowList
