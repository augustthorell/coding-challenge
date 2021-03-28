import styled from 'styled-components';

export const SlideshowContainer = styled.div`
    margin: 40px 50px;
    display: grid;
    justify-content: space-around;
    grid-gap: 40px;
    grid-template-columns: 1fr;
        @media screen and (min-width: 850px) {
            grid-template-columns: 1fr 1fr 1fr;
            
    }
`