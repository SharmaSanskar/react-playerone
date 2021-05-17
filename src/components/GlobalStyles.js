import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
  }
  body{
    font-family: 'Comfortaa', sans-serif;
    width: 100%;  
  }
  h1{
    font-size: 3rem;
  }
  h2{
    font-size: 2.8rem;
    font-family: 'Righteous', serif;
    color: #5B4BFC;
  }
  h3{
    font-size: 1.4rem;
    color: #8646FA;
  }
  p{
    font-size: 1.2rem;
    color: #333;
    line-height: 1.4;
  }
  a{
    text-decoration: none;
    color: #333;
  }
  input{
    font-weight: bold;
    font-family: "Comfortaa", sans-serif;
  }
`;

export default GlobalStyles;
