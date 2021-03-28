import styled from 'styled-components';

export const SlideshowContainer = styled.div`
    margin: 40px 50px;
    display: grid;
    justify-content: space-around;
    grid-gap: 40px;
    grid-template-columns: 1fr;
    div:hover {
        box-shadow: 12px 13px 4px rgba(24, 89, 81, 0.95);
        transition: 0.5s ease;
    }
        @media screen and (min-width: 850px) {
            grid-template-columns: 1fr 1fr 1fr;
            
    }
`

export const Card = styled.div`
        border-radius: 10px;
        background: linear-gradient(360deg, #FFBA08 -1.68%, #FFE29F 101.3%);
        transition: 0.5s ease;
        cursor: pointer;
        position: relative;
        min-width: 200px;
        min-height: 300px;
        color: #fff;
    img {
        margin: auto;
        display: block;
        width: 100%;
        max-width: 300px;
        margin-bottom: 50px;
    }
    h2 {
        position: absolute;
        transform: translate(-50%);
        bottom: 20px;
        left: 50%;
    }
@media screen and (max-width: 850px) {
    display: grid;
    
    grid-template-columns: 1fr 1fr;
    img {
        grid-column: 1;
        justify-self: center;
        align-self: center;
        position: static;
    }
    h2 {
        grid-column: 2;
        justify-self: center;
        align-self: center;
        position: static;
        transform: translate(0%);
    }

`