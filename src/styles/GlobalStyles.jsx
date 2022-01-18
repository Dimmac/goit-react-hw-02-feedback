import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;

  }

  body {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    background-color: white;
    color: #010101;
  }

  // Title
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

// List
ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

// Link
a {
  text-decoration: none;
  color: inherit;
}

.link {
  text-decoration: none;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

// Image
img {
  max-width: 100%;
  height: auto;
  display: block;
}

// Address
address {
  font-style: normal;
}

// Button
button {
  padding: 0;
  border: none;
  background-color: transparent;
}
`;
