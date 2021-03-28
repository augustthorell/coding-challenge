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
    color: #fff;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const SlideshowWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`
export const SlideshowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`
export const SlideshowItem = styled.img`
display: inline-block;
width: 100%;
max-height: 900px;
`
export const SlideshowDots = styled.div`
  text-align: center;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    display: none;
}
`
export const SlideshowDot = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: #fafafa;
  &.active {
    background-color: #636166;
  }
`