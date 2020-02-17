import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
      padding: 0;
      margin: 0;
      outline: 0;
      box-sizing: border-box;
    }


    html, body, #root {
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      height: 100%;
    }

    body {
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
      font-size: 0.9rem;
    }


    /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background-color: #fff;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #bfbfbf; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #b2b2b2; 
    }

`

export default GlobalStyle;