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

`

export default GlobalStyle;