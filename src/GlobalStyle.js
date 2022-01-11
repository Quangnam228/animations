import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root{
        --purple-primary: #564EDF;
        --accent-pink: #F44E77;
        --neutral-light: #F0F4FF;
        --lavendar-secondary: #6B6D9E;
        --dark-primary: #161950;
        --border-colour: #CAB6F1;
        --white-color: #FFF;
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
    }
    body{
        background-color: var(--neutral-light);
        color: var(--white-color);
        font-size:1.1rem;
    }
    a {
        color: var(--white-color);
    }
    p{
        color : var(--lavendar-secondary);
        line-height: 1.5rem;

    }
    .secondary-heading {
        font-size: 2rem;
        color: var(--purple-primary);
    }
    .small-heading {
        font-size: 1.9rem;
        color: var(--purple-primary);
        text-align: center;
    }
    span{
        color: var(--accent-pink);
    }
    .c-para{
        text-align: center;
    }
`;

export default GlobalStyle;