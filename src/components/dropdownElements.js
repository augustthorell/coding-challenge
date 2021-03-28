import styled from 'styled-components';


export const SectionWrapper = styled.div`
    display: grid;
    background-color: #FFC542;
    height: 800px;
    width: 100%;
    padding: 0 50px;
    gridTemplateColumns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
        @media screen and (min-width: 960px) {
            grid-template-columns: 2fr 3fr 1fr;
    }
`
export const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    gridTemplateColumns: 1fr;
    gridColumn: 1;
    gridRow: 2;
    @media screen and (min-width: 960px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column: 2;
        grid-row: 2;
}
`
export const DropdownList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
    border-bottom: 1px solid #fff;
    @media screen and (min-width: 960px) {
        display: block;
        border-bottom: 0;
}
`
export const Dropdown = styled.ul`
    float:left;
    margin-left: 20px;
    li {
        margin-bottom: 20px;
    }
    @media screen and (min-width: 960px) {
        display: inline-block;
        grid-template-columns: 1fr 1fr 1fr;
    
  }
`
export const SubscribeContainer = styled.div`
    grid-column: 1;
    grid-row: 3;
    @media screen and (min-width: 960px) {
        grid-rolumn: 3;
        grid-row: 2;
    }
`

export const ImageContainer = styled.div`
    grid-column: 1;
    grid-row: 1;
    margin-top: 15px;
    @media screen and (min-width: 960px) {
        grid-column: 3;
        grid-row: 2;
    }
`
export const DropdownButton = styled.div`
    color: #fff;
    float: right;
    @media screen and (min-width: 960px) {
        display: none;
    }
`