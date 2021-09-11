import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components/macro'
import BGImage from './images/bgimage.jpeg'

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:aafter {
        box-sizing: border-box;
        padding: 0;
        margin: 0
    }

    body {
        background-image: url(${BGImage});
        background-repeat: no-repeat;
        background-size: cover;
        padding: 0 20px;
        font-family: 'Catamaran', sans-serif;
        display: flex;
        justify-content: center
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
        margin: 0
    }

    .score {
        color: #fff;
        font-size: 2rem
    }

    h1 {
        font-family: 'Fascinate Inline', cursive;
        background-image: linear-gradient(341deg,#fff,#876383);
        font-weight: 400;
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #ffffff, #777162);
        border: 2px solid #777162;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
      }

    .start {
        max-width: 200px;
    }
`