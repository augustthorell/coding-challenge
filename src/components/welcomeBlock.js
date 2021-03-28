import React from 'react'
import StartImage from '../assets/startImage.png'
import Stockphoto1 from '../assets/stockphoto1.jpeg'
import Stockphoto2 from '../assets/stockphoto2.jpeg'
import {
    WelcomeText,
    SlideshowWrapper,
    SlideshowSlider,
    SlideshowItem,
    SlideshowDots,
    SlideshowDot,
} from './welcomeBlockElements'
import '../style.css'

const images = [StartImage, Stockphoto1, Stockphoto2];
const delay = 8000;

function WelcomeBlock() {
    const welcomeBlockWrapper = {
        width: '100%',
        position: 'relative',
        backgroundColor: '#FFC542',
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



    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);


    return (
        <div style={welcomeBlockWrapper}>
            <SlideshowWrapper className="slideshow">
                <SlideshowSlider
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {images.map((image, index) => (
                        <SlideshowItem
                            src={image}
                            className="slide"
                            key={index}
                        ></SlideshowItem>
                    ))}
                </SlideshowSlider>
                <SlideshowDots className="slideshowDots">
                    {images.map((_, idx) => (
                        <SlideshowDot
                            key={idx}
                            className={`slideshowDot${index === idx ? " active" : ""}`}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></SlideshowDot>
                    ))}
                </SlideshowDots>
            </SlideshowWrapper>

            <WelcomeText >
                <h1>Welcome to HappyWeb</h1>
                <button style={buttonStyle}>See more</button>
            </WelcomeText>

        </div>
    )
}

export default WelcomeBlock
