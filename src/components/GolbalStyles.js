import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    a{
        text-decoration:none;
        color: inherit;
    }
    *{
        box-sizing:border-box;
    }
    html,
    body, 
    #root {
        overflow: hidden;
        min-height: 330px;
        min-width: 330px;
        height: 100%;
        padding: 0;
        margin: 0;
    }
`;

export default globalStyles;
