import React from 'react'
import Cards from './cards'

/*** Images ***/
import image1 from '../assets/giftCard.png'
import image2 from '../assets/happiCard.png'
import image3 from '../assets/ngo.png'

import { SlideshowContainer } from './slideshowElements';

export default function slideShow({ size }) {



    return (
        <SlideshowContainer className='slideshowItem'>
            <Cards
                src={image1}
                alt='Woman stands with a giftcard with a white background'
                title='Text 1'
            />
            <Cards
                src={image2}
                alt='Woman sits next to a nametag which is sparkly'
                title='Text 2'
            />
            <Cards
                src={image3}
                alt='Man hands over a package to a woman'
                title='Text 3'
            />

        </SlideshowContainer>
    )
}
