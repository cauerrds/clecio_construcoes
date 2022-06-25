import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
 //Core colors
 --darkblue: #0d0f36;
 --smoothblue: #294380;
 --blue: #69d2cd;
 --lightblue: #b9f1d6;
 --beige: #f1f6ce;
 --fontBlack: #070707
 --snowWhite: #F3F3F3
}


body{
    background-color: var(---darkblue);
}

body,input,button {
    font-family: "inter";
    font-size: 1rem;
} 

button{
    border: none;
    cursor: pointer;
}

a{
    text-decoration: none;
}


`;
