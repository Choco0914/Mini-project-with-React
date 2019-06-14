import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
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
        height: 100%;
    }
`;

export default globalStyles;
