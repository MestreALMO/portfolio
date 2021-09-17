import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --bg-700: #1a202c;
  --bg-800: #011627;
  --bg-900: #000;
  --white: #fff;

  --ft-400: 1.4rem;
  --ft-600: 3.4rem;

  --max-width-app: 50rem;

  --padding-section: 2rem;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#__next {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  background: var(--bg-700);
  color: var(--white);
}

a {
  color: inherit;
  text-decoration: inherit;
}
`;
