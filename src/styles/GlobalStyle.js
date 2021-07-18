import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.1rem;

    }
    body{
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
        transition: all .4s ease-in-out;
    }
`;


export default GlobalStyle;