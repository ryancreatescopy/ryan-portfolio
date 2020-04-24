import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BaseStyles, theme } from "rimble-ui";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider
  theme={Object.assign({}, theme, {
    fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif: '"Inter", -apple-system, sans-serif',
  },
    colors: {
      ...theme.colors,
      primary: '#1A2233',
      secondary: '#9498F7',
  },
})}
>
  <BaseStyles>
      <App />
    </BaseStyles>
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
