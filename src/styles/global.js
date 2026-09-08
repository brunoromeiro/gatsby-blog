import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--background);
    color: var(--texts);
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  button, input, textarea, select {
    font: inherit;
  }

  body.dark {
    --borders: #303641;
    --texts: #aab4c0;
    --mutedText: #7f8a98;
    --heading: #f5f7fa;
    --postColor: #07121c;
    --highlight: #03dac6;
    --mediumBackground: #121821;
    --background: #0b1118;
    --surface: #121a24;
    --shadow: rgba(0, 0, 0, 0.24);
    --white: #fff;
    --black: #000;
  }

  body.light {
    --borders: #e4e8ee;
    --texts: #4d5968;
    --mutedText: #7a8695;
    --heading: #17202a;
    --postColor: #fff;
    --highlight: #b00020;
    --mediumBackground: #f7f8fa;
    --background: #f4f6f8;
    --surface: #fff;
    --shadow: rgba(23, 32, 42, 0.08);
    --white: #fff;
    --black: #000;
  }
`

export default GlobalStyles
