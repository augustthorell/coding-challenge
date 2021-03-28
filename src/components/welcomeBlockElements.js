import styled from 'styled-components';

export const WelcomeText = styled.div`
    display: none;
    position: absolute;
    top: 50%;
    right: 5vw;
    width: 400px;
    fontSize: 30px;
    margin: 0;
    transform: translate(-0%, -50%);
  @media screen and (min-width: 768px) {
    display: block;
  }
`